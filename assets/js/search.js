/* ============================================================
   search.js — Getuk Goreng Haji Tohirin 6A
   ============================================================ */

(function () {
  /* ---- Data Produk ---- */
  const PRODUCTS = [
    { id: 'getuk1',  name: 'Getuk Goreng 1 KG',      cat: 'Getuk Goreng',      icon: '🍠', page: 'pages/produk.html', modal: 'getuk1' },
    { id: 'getuk2',  name: 'Getuk Goreng ½ KG',      cat: 'Getuk Goreng',      icon: '🍠', page: 'pages/produk.html', modal: 'getuk2' },
    { id: 'nopia1',  name: 'Nopia Gula Jawa',         cat: 'Nopia',             icon: '🟤', page: 'pages/produk.html', modal: 'nopia1' },
    { id: 'nopia2',  name: 'Nopia Rasa Coklat',       cat: 'Nopia',             icon: '🍫', page: 'pages/produk.html', modal: 'nopia2' },
    { id: 'kb1',     name: 'Klanting Jagung Bakar',   cat: 'Klanting Bumbu',    icon: '🌽', page: 'pages/produk.html', modal: 'kb1'    },
    { id: 'ko1',     name: 'Klanting Ori Besar',      cat: 'Klanting Original', icon: '⭕', page: 'pages/produk.html', modal: 'ko1'    },
  ];

  /* ---- Konstanta ---- */
  const RECENT_KEY  = 'ht_recent_searches';
  const RECENT_MAX  = 5;
  const DEBOUNCE_MS = 250;

  /* ---- State ---- */
  let activeIdx  = -1;
  let results    = [];
  let debounceTimer;
  let isOpen     = false;

  /* ---- Recent Searches (localStorage) ---- */
  function getRecent() {
    try { return JSON.parse(localStorage.getItem(RECENT_KEY)) || []; }
    catch (_) { return []; }
  }
  function saveRecent(q) {
    if (!q) return;
    let list = getRecent().filter(x => x !== q);
    list.unshift(q);
    list = list.slice(0, RECENT_MAX);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(list)); } catch (_) {}
  }
  function removeRecent(q) {
    const list = getRecent().filter(x => x !== q);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(list)); } catch (_) {}
  }

  /* ---- Highlight ---- */
  function hl(text, q) {
    if (!q) return text;
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  /* ---- Render helpers ---- */
  function renderDefault() {
    const recent = getRecent();
    const recentHTML = recent.length
      ? `<div class="sr-section">
          <div class="sr-label">
            <span>Pencarian terakhir</span>
            <button class="sr-clear-all" onclick="window._search.clearAllRecent()">Hapus semua</button>
          </div>
          <div class="sr-tags">
            ${recent.map(q =>
              `<span class="sr-tag" onclick="window._search.setQuery('${q.replace(/'/g,"\\'")}')">
                ${q}
                <span class="sr-tag-del" onclick="event.stopPropagation();window._search.removeRecent('${q.replace(/'/g,"\\'")}')">×</span>
              </span>`
            ).join('')}
          </div>
        </div>
        <div class="sr-divider"></div>`
      : '';

    const popularHTML = `<div class="sr-section">
      <div class="sr-label"><span>Produk populer</span></div>
      ${PRODUCTS.slice(0, 4).map(p =>
        `<div class="sr-item" role="option" tabindex="-1" onclick="window._search.pickProduct('${p.modal}', '${p.name}')">
          <div class="sr-thumb">${p.icon}</div>
          <div class="sr-info">
            <div class="sr-name">${p.name}</div>
            <div class="sr-cat">${p.cat}</div>
          </div>
          <span class="sr-arrow">→</span>
        </div>`
      ).join('')}
    </div>`;

    document.getElementById('sr-body').innerHTML = recentHTML + popularHTML;
    document.getElementById('sr-count').textContent = '';
    activeIdx = -1;
  }

  function renderResults(q) {
    if (!q) { renderDefault(); return; }

    results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.cat.toLowerCase().includes(q.toLowerCase())
    );

    const count = results.length;
    document.getElementById('sr-count').textContent = count ? count + ' hasil' : '';

    if (count === 0) {
      document.getElementById('sr-body').innerHTML =
        `<div class="sr-empty">
          <div class="sr-empty-icon">🔍</div>
          <div>Tidak ditemukan untuk "<strong>${q}</strong>"</div>
          <div class="sr-empty-hint">Coba: getuk, nopia, klanting</div>
        </div>`;
      return;
    }

    document.getElementById('sr-body').innerHTML =
      `<div class="sr-section">
        <div class="sr-label"><span>Hasil pencarian</span></div>
        ${results.map((p, i) =>
          `<div class="sr-item" role="option" tabindex="-1" data-idx="${i}"
               onclick="window._search.pickProduct('${p.modal}', '${q}')">
            <div class="sr-thumb">${p.icon}</div>
            <div class="sr-info">
              <div class="sr-name">${hl(p.name, q)}</div>
              <div class="sr-cat">${p.cat}</div>
            </div>
            <span class="sr-arrow">→</span>
          </div>`
        ).join('')}
      </div>`;
    activeIdx = -1;
  }

  function updateActive() {
    document.querySelectorAll('.sr-item[data-idx]').forEach((el, i) => {
      el.classList.toggle('sr-active', i === activeIdx);
    });
  }

  /* ---- Public API ---- */
  function openSearch() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.classList.add('search-open');
    isOpen = true;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const inp = overlay.querySelector('.search-field');
      if (inp) inp.focus();
    }, 80);
    renderDefault();
  }

  function closeSearch() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.classList.remove('search-open');
    isOpen = false;
    document.body.style.overflow = '';
    const inp = overlay.querySelector('.search-field');
    if (inp) inp.value = '';
  }

  function handleSearch(e) {
    /* Keyboard navigation */
    if (e.type === 'keydown') {
      const items = document.querySelectorAll('.sr-item[data-idx]');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, items.length - 1);
        updateActive();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        updateActive();
      } else if (e.key === 'Enter') {
        if (activeIdx >= 0 && items[activeIdx]) {
          items[activeIdx].click();
        } else if (results.length === 1) {
          pickProduct(results[0].modal, e.target.value.trim());
        }
      } else if (e.key === 'Escape') {
        closeSearch();
      }
      return;
    }
    /* Debounced input */
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderResults(e.target.value.trim());
    }, DEBOUNCE_MS);
  }

  function setQuery(q) {
    const inp = document.querySelector('.search-field');
    if (inp) { inp.value = q; inp.focus(); }
    renderResults(q);
  }

  function pickProduct(modalId, query) {
    saveRecent(query);
    closeSearch();
    
    // Check if we are already on the products page
    if (window.location.pathname.includes('produk.html')) {
      if (typeof openModal === 'function') {
        openModal(modalId);
      }
    } else {
      // Redirect to products page with search query
      const basePath = window.location.pathname.includes('pages/') ? '' : 'pages/';
      window.location.href = basePath + 'produk.html?q=' + encodeURIComponent(query);
    }
  }

  function clearAllRecent() {
    try { localStorage.removeItem(RECENT_KEY); } catch (_) {}
    renderDefault();
  }

  function removeRecentItem(q) {
    removeRecent(q);
    renderDefault();
  }

  /* ---- Inisialisasi DOM ---- */
  function buildOverlayHTML() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div class="sr-backdrop" onclick="closeSearch()"></div>
      <div class="sr-panel" role="dialog" aria-label="Pencarian produk">
        <div class="sr-input-row">
          <svg class="sr-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" class="search-field" placeholder="Cari produk oleh-oleh..."
            autocomplete="off" role="combobox" aria-expanded="true" aria-haspopup="listbox"
            oninput="handleSearch(event)" onkeydown="handleSearch(event)">
          <button class="sr-close-btn" onclick="closeSearch()" aria-label="Tutup pencarian">✕</button>
        </div>
        <div id="sr-body" class="sr-body" role="listbox"></div>
        <div class="sr-footer">
          <span class="sr-hint">
            <kbd class="sr-kbd">↑↓</kbd> navigasi &nbsp;
            <kbd class="sr-kbd">Enter</kbd> pilih &nbsp;
            <kbd class="sr-kbd">Esc</kbd> tutup
          </span>
          <span id="sr-count" class="sr-count"></span>
        </div>
      </div>
    `;
  }

  /* ---- Klik backdrop untuk tutup ---- */
  function initBackdropClose() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closeSearch();
    });
  }

  /* ---- Expose ke global (dipanggil dari HTML onclick) ---- */
  window.openSearch  = openSearch;
  window.closeSearch = closeSearch;
  window.handleSearch = handleSearch;

  /* Internal API untuk render callbacks */
  window._search = {
    setQuery,
    pickProduct,
    clearAllRecent,
    removeRecent: removeRecentItem,
  };

  /* ---- Boot ---- */
  document.addEventListener('DOMContentLoaded', function () {
    buildOverlayHTML();
    initBackdropClose();

    // Check for URL parameters
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      setTimeout(() => {
        openSearch();
        const inp = document.querySelector('.search-field');
        if (inp) {
          inp.value = q;
          renderResults(q);
        }
      }, 500);
    }
  });
})();
