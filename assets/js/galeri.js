const items = [
  { cat: 'produk', cap: 'Getuk Goreng Original — Sajian Khas Sokaraja', img: '../assets/img/galeri/galeri1.jpeg', ph: '🍠' },
  { cat: 'toko', cap: 'Toko Getuk Goreng Haji Tohirin 6A', img: '../assets/img/galeri/galeri2.jpeg', ph: '🏪' },
  { cat: 'produk', cap: 'Getuk Goreng Fresh Gula Jawa', img: '../assets/img/galeri/galeri3.jpeg', ph: '🍠' },
  { cat: 'proses', cap: 'Proses Tradisional Pembuatan Adonan Getuk', img: '../assets/img/galeri/galeri4.jpeg', ph: '👨‍🍳' },
  { cat: 'kemasan', cap: 'Kemasan Besek Bambu & Box Khas Sokaraja', img: '../assets/img/galeri/galeri5.jpeg', ph: '📦' },
  { cat: 'produk', cap: 'Nopia Isian Gula Aren Manis', img: '../assets/img/galeri/galeri6.jpeg', ph: '🟤' },
  { cat: 'proses', cap: 'Penggorengan Getuk Tradisional', img: '../assets/img/galeri/galeri7.jpeg', ph: '🥣' },
  { cat: 'kemasan', cap: 'Packing Rapi & Higienis', img: '../assets/img/galeri/galeri8.jpeg', ph: '🛍️' },
  { cat: 'toko', cap: 'Display Lengkap Aneka Oleh-Oleh Banyumasan', img: '../assets/img/galeri/galeri9.jpeg', ph: '🏪' },
  { cat: 'produk', cap: 'Klanting Renyah Aneka Rasa', img: '../assets/img/galeri/galeri10.jpeg', ph: '⭕' },
];

let visIdxs = [...Array(items.length).keys()];
let curLB = 0;

function filterG(btn, cat) {
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const all = document.querySelectorAll('.gitem');
  visIdxs = [];
  let v = 0;
  all.forEach(el => {
    const show = cat === 'all' || el.dataset.cat === cat;
    el.style.display = show ? '' : 'none';
    if (show) {
      visIdxs.push(parseInt(el.dataset.idx));
      v++;
    }
  });
  const gcountEl = document.getElementById('gcount');
  if (gcountEl) gcountEl.textContent = v;
  const gemptyEl = document.getElementById('gempty');
  if (gemptyEl) gemptyEl.style.display = v === 0 ? 'block' : 'none';
}

function openLB(idx) {
  curLB = visIdxs.indexOf(idx);
  if (curLB < 0) curLB = 0;
  renderLB();
  const lbEl = document.getElementById('lb');
  if (lbEl) lbEl.classList.add('open');
}

function renderLB() {
  const d = items[visIdxs[curLB]];
  const content = document.getElementById('lb-content');
  const catEl = document.getElementById('lb-cat');
  const capEl = document.getElementById('lb-title');
  const counterEl = document.getElementById('lb-counter');

  if (!content) return;

  if (d.img) {
    content.innerHTML = `
      <img class="lb-img" src="${d.img}" alt="${d.cap}" referrerPolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="lb-ph" style="display:none">${d.ph}</div>
    `;
  } else {
    content.innerHTML = `<div class="lb-ph">${d.ph}</div>`;
  }

  if (catEl) catEl.textContent = d.cat.charAt(0).toUpperCase() + d.cat.slice(1);
  if (capEl) capEl.textContent = d.cap;
  if (counterEl) counterEl.textContent = `${curLB + 1} / ${visIdxs.length}`;
}

function navLB(dir) {
  if (visIdxs.length === 0) return;
  curLB = (curLB + dir + visIdxs.length) % visIdxs.length;
  renderLB();
}

function closeLB() {
  const lbEl = document.getElementById('lb');
  if (lbEl) lbEl.classList.remove('open');
}

function closeLBOut(e) {
  if (e.target === document.getElementById('lb')) closeLB();
}

document.addEventListener('keydown', e => {
  const lbEl = document.getElementById('lb');
  if (!lbEl || !lbEl.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') navLB(-1);
  if (e.key === 'ArrowRight') navLB(1);
  if (e.key === 'Escape') closeLB();
});

// Exposure to global scope for HTML inline calls
window.filterG = filterG;
window.openLB = openLB;
window.navLB = navLB;
window.closeLB = closeLB;
window.closeLBOut = closeLBOut;
