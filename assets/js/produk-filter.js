// Deteksi path prefix
(function() {
  const scripts = document.querySelectorAll('script[src]');
  let inPages = false;
  scripts.forEach(s => { if (s.src.includes('/pages/')) inPages = true; });
  if (!inPages) inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
  window._PRODUK_BASE = inPages ? '../assets/img/produk/' : 'assets/img/produk/';
})();

const prods = {
  getuk1: { cat: 'Getuk Goreng', name: 'Getuk Goreng Haji Tohirin 1 KG', sub: 'Resep Asli Sokaraja', price: 'Rp 36.000', desc: 'Getuk goreng asli Sokaraja dengan cita rasa khas gula merah dan singkong pilihan. Digoreng hingga renyah di luar dan lembut di dalam. Produk andalan kami yang paling banyak dicari sebagai oleh-oleh dari Banyumas.', specs: [['Berat', '1 Kilogram'], ['Bahan', 'Singkong & Gula Merah'], ['Masa simpan', '3–5 hari suhu ruang'], ['Kemasan', 'Box karton kedap']], img: 'getuk1kg_1.jpeg', badge: 'Terlaris', wa: 'Getuk+Goreng+1+KG' },
  getuk2: { cat: 'Getuk Goreng', name: 'Getuk Goreng Haji Tohirin 1/2 KG', sub: 'Resep Asli Sokaraja', price: 'Rp 18.000', desc: 'Versi setengah kilogram dari getuk goreng andalan kami. Ideal untuk oleh-oleh personal atau untuk dicoba sebelum memesan lebih banyak.', specs: [['Berat', '½ Kilogram'], ['Bahan', 'Singkong & Gula Merah'], ['Masa simpan', '3–5 hari suhu ruang'], ['Kemasan', 'Box karton kedap']], img: 'getuk1kg_2.jpeg', wa: 'Getuk+Goreng+%C2%BD+KG' },
  nopia1: { cat: 'Nopia', name: 'Nopia Gula Jawa', sub: 'Isian Gula Merah', price: 'Rp 26.000', desc: 'Nopia khas Banyumas berbentuk bulat dengan kulit tipis renyah dan isian gula aren manis yang harum.', specs: [['Varian', 'Gula Jawa / Gula Aren'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–14 hari'], ['Kemasan', 'Plastik kedap udara']], img: 'nopia_gulajawa.jpeg', wa: 'Nopia+Gula+Jawa' },
  nopia2: { cat: 'Nopia', name: 'Nopia Rasa Coklat', sub: 'Isian Coklat Lumer', price: 'Rp 26.000', desc: 'Nopia dengan isian coklat lembut yang berpadu sempurna dengan kulit renyah.', specs: [['Varian', 'Coklat'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–14 hari'], ['Kemasan', 'Plastik kedap udara']], img: 'nopia_coklat1.jpeg', wa: 'Nopia+Coklat' },
  nopia3: { cat: 'Nopia', name: 'Nopia Rasa Durian', sub: 'Durian Asli', price: 'Rp 26.000', desc: 'Nopia dengan isian durian asli yang harum dan berkarakter. Tersedia musiman.', specs: [['Varian', 'Durian'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–10 hari'], ['Kemasan', 'Plastik kedap udara']], img: 'nopia_durian1.jpeg', wa: 'Nopia+Durian' },
  kb1: { cat: 'Klanting Bumbu', name: 'Klanting Bumbu Jagung Bakar', sub: 'Pecinta Jagung', price: 'Rp 22.000', desc: 'Klanting singkong dengan bumbu jagung bakar yang smoky-manis.', specs: [['Varian', 'Jagung Bakar'], ['Tekstur', 'Renyah'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']], img: 'klanting_bumbu_jagungbakar.jpeg', wa: 'Klanting+Jagung+Bakar' },
  kb2: { cat: 'Klanting Bumbu', name: 'Klanting Bumbu Pedas Manis', sub: 'Pedas Pas', price: 'Rp 22.000', desc: 'Perpaduan pedas dan manis yang seimbang. Tingkat kepedasan sedang.', specs: [['Varian', 'Pedas Manis'], ['Tingkat pedas', 'Sedang'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']], img: 'klanting_bumbu_pedasmanis.jpeg', wa: 'Klanting+Pedas+Manis' },
  kb3: { cat: 'Klanting Bumbu', name: 'Klanting Bumbu Bawang', sub: 'Gurih Bawang', price: 'Rp 22.000', desc: 'Aroma bawang goreng yang kuat dengan rasa gurih-asin sempurna.', specs: [['Varian', 'Bawang'], ['Rasa', 'Gurih Bawang'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']], img: 'klanting_bumbu_bawang.jpeg', wa: 'Klanting+Bawang' },
  kb4: { cat: 'Klanting Bumbu', name: 'Klanting Bumbu Keju', sub: 'Keju Gurih', price: 'Rp 22.000', desc: 'Taburan bumbu keju creamy dan gurih di atas klanting renyah.', specs: [['Varian', 'Keju'], ['Rasa', 'Gurih Keju'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']], img: 'klanting_bumbu_keju.jpeg', wa: 'Klanting+Keju' },
  ko1: { cat: 'Klanting Original', name: 'Klanting Original Besar', sub: 'Kepingan Besar', price: 'Rp 20.000', desc: 'Klanting tanpa bumbu tambahan ukuran besar. Cita rasa singkong asli yang natural.', specs: [['Varian', 'Original / Polos'], ['Ukuran', 'Besar'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']], img: 'klanting_originalbesar.jpeg', wa: 'Klanting+Original+Besar' },
  ko2: { cat: 'Klanting Original', name: 'Klanting Original Kecil', sub: 'Kepingan Kecil', price: 'Rp 20.000', desc: 'Klanting original ukuran kecil yang praktis untuk isian toples atau souvenir.', specs: [['Varian', 'Original / Polos'], ['Ukuran', 'Kecil'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']], img: 'klanting_originalkecil.jpeg', wa: 'Klanting+Original+Kecil' },
  ko3: { cat: 'Klanting Original', name: 'Klanting Original Warna', sub: 'Warna Warni', price: 'Rp 20.000', desc: 'Klanting original dengan warna-warni alami dari pewarna food grade. Cocok untuk souvenir.', specs: [['Varian', 'Aneka Warna'], ['Pewarna', 'Alami / Food Grade'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']], img: 'klanting_originalwarna.jpeg', wa: 'Klanting+Original+Warna' }
};

/* ---- Helpers ---- */
function getFallbackEmoji(cat) {
  if (cat === 'Getuk Goreng')      return '🍠';
  if (cat === 'Nopia')             return '🟤';
  if (cat === 'Klanting Bumbu')    return '🌽';
  if (cat === 'Klanting Original') return '⭕';
  return '🍱';
}

function getCatId(cat) {
  if (cat === 'Getuk Goreng')      return 'getuk';
  if (cat === 'Nopia')             return 'nopia';
  if (cat === 'Klanting Bumbu')    return 'klanting-bumbu';
  if (cat === 'Klanting Original') return 'klanting-original';
  return cat;
}

function hlText(text, q) {
  if (!q) return text;
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<mark style="background:#fff3c4;color:#7a4f10;border-radius:2px;padding:0 1px">$1</mark>');
}

/* ---- Render produk di homepage ---- */
function renderHomeProducts() {
  const prodGrid = document.getElementById('prod-grid');
  if (!prodGrid) return;

  const BASE = window._PRODUK_BASE || 'assets/img/produk/';
  const featuredIds = ['getuk1', 'getuk2', 'nopia1', 'nopia2', 'kb1', 'kb2', 'ko1', 'ko2'];

  prodGrid.innerHTML = featuredIds.map(id => {
    const p = prods[id];
    if (!p) return '';
    const catId  = getCatId(p.cat);
    const emoji  = getFallbackEmoji(p.cat);
    const imgSrc = BASE + p.img;
    const badgeHTML = p.badge
      ? `<span class="card-badge" style="position:absolute;top:0.6rem;left:0.6rem;background:var(--h);color:var(--k);font-size:0.6rem;padding:0.18rem 0.5rem;border-radius:2px;text-transform:uppercase;font-weight:600;z-index:2">${p.badge}</span>`
      : '';
    return `
      <div class="product-card" data-cat="${catId}" onclick="openModal('${id}')" style="position:relative">
        ${badgeHTML}
        <div class="product-img">
          <img src="${imgSrc}" alt="${p.name}" loading="lazy"
            onerror="this.style.display='none';this.parentElement.style.cssText='background:var(--kd);display:flex;align-items:center;justify-content:center;font-size:3rem';this.parentElement.innerHTML='${emoji}'">
        </div>
        <div class="product-info">
          <div class="product-cat">${p.cat}</div>
          <div class="product-name">${p.name}</div>
          <span class="product-order">${p.price}</span>
        </div>
      </div>`;
  }).join('') + `<a href="pages/produk.html" class="btn-primary" style="grid-column:1/-1;margin-top:2rem;text-align:center">Lihat Semua Produk</a>`;
}

/* ---- Render katalog di produk.html ---- */
function renderCatalogProducts(searchQuery) {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const BASE = window._PRODUK_BASE || 'assets/img/produk/';
  const q    = (searchQuery || '').trim();

  grid.innerHTML = Object.keys(prods).map(id => {
    const p      = prods[id];
    const catId  = getCatId(p.cat);
    const emoji  = getFallbackEmoji(p.cat);
    const imgSrc = BASE + p.img;
    const badgeHTML = p.badge ? `<span class="card-badge">${p.badge}</span>` : '';

    return `
      <div class="card" data-cat="${catId}" onclick="openModal('${id}')">
        <div class="card-img" style="position:relative">
          <img src="${imgSrc}" alt="${p.name}" loading="lazy"
            onerror="this.style.display='none';this.parentElement.style.cssText='background:var(--kd);display:flex;align-items:center;justify-content:center;font-size:3rem';this.parentElement.innerHTML='${emoji}'">
          ${badgeHTML}
        </div>
        <div class="card-body">
          <div class="card-cat">${p.cat}</div>
          <div class="card-name">${hlText(p.name, q)}</div>
          <span class="card-cta">${p.price}</span>
        </div>
      </div>`;
  }).join('');
}

/* ---- Filter katalog ---- */
function filterCatalog(btn, cat) {
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const q = (document.getElementById('catalog-search-input')
    ? document.getElementById('catalog-search-input').value.trim()
    : '').toLowerCase();

  let vis = 0;
  document.querySelectorAll('.card').forEach(c => {
    const catMatch   = cat === 'all' || c.dataset.cat === cat;
    const nameEl     = c.querySelector('.card-name');
    const nameText   = nameEl ? nameEl.textContent.toLowerCase() : '';
    const catText    = (c.querySelector('.card-cat') || {}).textContent || '';
    const queryMatch = !q || nameText.includes(q) || catText.toLowerCase().includes(q);
    const show = catMatch && queryMatch;
    c.style.display = show ? '' : 'none';
    if (show) vis++;
  });

  const countEl = document.getElementById('count');
  if (countEl) countEl.textContent = vis;

  const emptyEl = document.getElementById('empty');
  if (emptyEl) {
    if (vis === 0) {
      emptyEl.classList.add('visible');
      emptyEl.innerHTML = q
        ? `Tidak ada produk untuk <strong>"${q}"</strong><br><span style="font-size:0.8rem;opacity:0.7">Coba kata kunci lain atau pilih kategori berbeda.</span>`
        : 'Tidak ada produk dalam kategori ini.';
    } else {
      emptyEl.classList.remove('visible');
    }
  }

  updateCatalogHeader(q);
}

function searchCatalog(q) {
  const activePill = document.querySelector('.ftab.active');
  const catAttr    = activePill ? activePill.getAttribute('onclick') : '';
  const catMatch   = catAttr ? catAttr.match(/'([^']+)'/) : null;
  const cat        = catMatch ? catMatch[1] : 'all';
  filterCatalog(activePill, cat);
}

function updateCatalogHeader(q) {
  const heroEl = document.querySelector('.page-hero p');
  if (!heroEl) return;
  if (q) {
    heroEl.innerHTML = `Menampilkan hasil untuk <strong>"${q}"</strong>`;
  } else {
    heroEl.textContent = 'Pilihan lengkap oleh-oleh khas Sokaraja — getuk goreng, nopia, klanting bumbu, dan klanting original.';
  }
}

/* ---- Modal ---- */
function ensureModalExists() {
  if (document.getElementById('overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.className = 'overlay';
  overlay.setAttribute('onclick', 'closeOverlayOut(event)');
  overlay.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-img" id="m-img"></div>
      <div class="modal-body">
        <div class="modal-cat" id="m-cat"></div>
        <h2 class="modal-title" id="m-title"></h2>
        <div class="modal-desc" id="m-desc"></div>
        <div class="specs"><table id="m-specs"></table></div>
        <div class="modal-actions">
          <button class="btn-wa" id="m-wa-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Pesan via WhatsApp
          </button>
          <button class="btn-close" onclick="closeModal()">Tutup</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

function openModal(id) {
  ensureModalExists();
  const p = prods[id];
  if (!p) return;

  const BASE  = window._PRODUK_BASE || 'assets/img/produk/';
  const emoji = getFallbackEmoji(p.cat);

  const mi = document.getElementById('m-img');
  if (mi) {
    const badgeHTML = p.badge
      ? `<span style="position:absolute;top:12px;left:12px;background:var(--g);color:var(--h);font-size:10px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.06em;text-transform:uppercase;z-index:5">${p.badge}</span>`
      : '';
    mi.style.position = 'relative';
    mi.innerHTML = p.img
      ? `<img src="${BASE + p.img}" alt="${p.name}" class="modal-product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="moji" style="display:none">${emoji}</div>${badgeHTML}`
      : `<div class="moji">${emoji}</div>${badgeHTML}`;
  }

  const catEl   = document.getElementById('m-cat');   if (catEl)   catEl.textContent   = p.cat;
  const titleEl = document.getElementById('m-title'); if (titleEl) titleEl.textContent = p.name;
  const descEl  = document.getElementById('m-desc');  if (descEl)  descEl.textContent  = p.desc;

  let priceEl = document.getElementById('m-price');
  if (!priceEl) {
    priceEl = document.createElement('div');
    priceEl.id = 'm-price';
    priceEl.className = 'modal-price';
    if (titleEl && titleEl.parentNode) titleEl.parentNode.insertBefore(priceEl, titleEl.nextSibling);
  }
  priceEl.textContent = p.price || '';

  const specsEl = document.getElementById('m-specs');
  if (specsEl) specsEl.innerHTML = p.specs.map(s => `<tr><td>${s[0]}</td><td style="text-align:right">${s[1]}</td></tr>`).join('');

  const waBtn = document.getElementById('m-wa-btn');
  if (waBtn) waBtn.onclick = () => window.open(`https://wa.me/628112615272?text=Halo%2C+saya+ingin+memesan+${p.wa}.+Berapa+harganya%3F`, '_blank');

  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.add('open');
}

function closeModal() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('open');
}

function closeOverlayOut(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}

/* ---- DOMContentLoaded ---- */
document.addEventListener('DOMContentLoaded', () => {
  ensureModalExists();
  renderHomeProducts();

  const grid = document.getElementById('grid');
  if (!grid) return;

  const params     = new URLSearchParams(window.location.search);
  const queryParam = params.get('q') ? params.get('q').trim() : '';
  const modalParam = params.get('modal') ? params.get('modal').trim() : '';

  renderCatalogProducts(queryParam);

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput && queryParam) searchInput.value = queryParam;

  const activeTab = document.querySelector('.ftab.active') || document.querySelector('.ftab');
  const catAttr   = activeTab ? activeTab.getAttribute('onclick') : '';
  const catMatch  = catAttr ? catAttr.match(/'([^']+)'/) : null;
  const initCat   = catMatch ? catMatch[1] : 'all';
  filterCatalog(activeTab, initCat);

  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(() => searchCatalog(this.value.trim()), 200);
    });
    const clearBtn = document.getElementById('catalog-search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchCatalog('');
        searchInput.focus();
        const url = new URL(window.location);
        url.searchParams.delete('q');
        window.history.replaceState({}, '', url);
      });
    }
  }

  if (modalParam && prods[modalParam]) {
    openModal(modalParam);
    const url = new URL(window.location);
    url.searchParams.delete('modal');
    window.history.replaceState({}, '', url);
  }
});

/* ---- Expose ke global ---- */
window.prods            = prods;
window.getFallbackEmoji = getFallbackEmoji;
window.getCatId         = getCatId;
window.filterCatalog    = filterCatalog;
window.openModal        = openModal;
window.closeModal       = closeModal;
window.closeOverlayOut  = closeOverlayOut;
