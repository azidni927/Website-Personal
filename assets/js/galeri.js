const items = [
  { cat: 'produk', cap: 'Getuk Goreng Original — Sajian Khas Sokaraja', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ5FzWtrZVFLnchPqz7bavPLhruvVAEqWlXEg2HFushP88gpPoJ9dk5kUqV7erYuZs1RDkuvJDwHeoUiRKveJmiPjH1MvK1aCvhywBwDjjhpOEfufaxhGZSP8J9w3jttkCttT7i-itQqHJlWENiQIrfBo0V8ds5Vfc2iHeXVJEwgkh6m7oJ0eGzl-i2y46/s1280/WhatsApp%20Image%202024-07-29%20at%2001.20.24%20(1).jpeg', ph: '🍠' },
  { cat: 'toko', cap: 'Toko Getuk Goreng Haji Tohirin 6A', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglW-F_9vZkLrf7WvWspYT4p2EJUc8GEdpdK_CHqB5Bs0h8W7NjbJAI0-NjeQ0G2jDkPeG30uYK2c1U1J7_jE908bRyxfH0dNNq5hjG0ysHJ3flyeWWaDwx6qA9uco6ljfP0vZYMxLweVqSSP9kNmfIYlUCcPcCAybEN_iSwBw26oXS1lJJAvFt4S_TnDui/s1280/WhatsApp%20Image%202024-07-29%20at%2000.36.24%20(1).jpeg', ph: '🏪' },
  { cat: 'produk', cap: 'Getuk Goreng Segar', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1atSRQ4rpQPsJ-gBPHiSKAURO8kcWzu9-eNYdNjMG8ehhkiypHabR-xR9lqTf4zMjtFYrKqRfFP0Ndb3Htvm7FxdVpjttAzvFWqLjgEXDdXV8-92s4cevy0YN8OQCDeiFTihIDI6IrVLPvyLZhEZlGPst4TFIzdXLpRoS7kjixPG/s1280/WhatsApp%20Image%202024-07-29%20at%2000.36.17.jpeg', ph: '🍠' },
  { cat: 'kemasan', cap: 'Kemasan Box Getuk Goreng 1 KG', img: '', ph: '📦' },
  { cat: 'proses', cap: 'Proses Penggorengan Getuk', img: '', ph: '👨‍🍳' },
  { cat: 'proses', cap: 'Bahan Baku Singkong Pilihan', img: '', ph: '🌾' },
  { cat: 'produk', cap: 'Nopia Aneka Rasa', img: '', ph: '🟤' },
  { cat: 'kemasan', cap: 'Kemasan Plastik Klanting', img: '', ph: '🛍️' },
  { cat: 'toko', cap: 'Display Produk di Toko', img: '', ph: '🏪' },
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
      <img class="lb-img" src="${d.img}" alt="${d.cap}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
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
