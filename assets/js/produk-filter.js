const prods = {
  getuk1: {
    cat: 'Getuk Goreng',
    name: 'Getuk Goreng Haji Tohirin 1 KG',
    desc: 'Getuk goreng asli Sokaraja dengan cita rasa khas gula merah dan singkong pilihan. Digoreng hingga renyah di luar dan lembut di dalam. Produk andalan kami yang paling banyak dicari sebagai oleh-oleh dari Banyumas.',
    specs: [['Harga', 'Rp 36.000'], ['Berat', '1 Kilogram'], ['Bahan', 'Singkong & Gula Merah'], ['Masa simpan', '3–5 hari suhu ruang'], ['Kemasan', 'Box karton kedap']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Getuk+Goreng+1+KG'
  },
  getuk2: {
    cat: 'Getuk Goreng',
    name: 'Getuk Goreng Haji Tohirin 1/2 KG',
    desc: 'Versi setengah kilogram dari getuk goreng andalan kami. Ideal untuk oleh-oleh personal atau untuk dicoba sebelum memesan lebih banyak.',
    specs: [['Harga', 'Rp 18.000'], ['Berat', '½ Kilogram'], ['Bahan', 'Singkong & Gula Merah'], ['Masa simpan', '3–5 hari suhu ruang'], ['Kemasan', 'Box karton kedap']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Getuk+Goreng+%C2%BD+KG'
  },
  nopia1: {
    cat: 'Nopia',
    name: 'Nopia Gula Jawa',
    desc: 'Nopia khas Banyumas berbentuk bulat dengan kulit tipis renyah and isian gula aren manis yang harum. Cita rasa karamel alami yang tidak terlalu manis.',
    specs: [['Harga', 'Rp 26.000'], ['Varian', 'Gula Jawa / Gula Aren'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–14 hari'], ['Kemasan', 'Plastik kedap udara']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Nopia+Gula+Jawa'
  },
  nopia2: {
    cat: 'Nopia',
    name: 'Nopia Rasa Coklat',
    desc: 'Nopia dengan isian coklat lembut yang berpadu sempurna dengan kulit renyah. Favorit anak-anak dan pecinta coklat yang ingin cita rasa modern dalam wadah tradisional.',
    specs: [['Harga', 'Rp 26.000'], ['Varian', 'Coklat'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–14 hari'], ['Kemasan', 'Plastik kedap udara']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Nopia+Coklat'
  },
  nopia3: {
    cat: 'Nopia',
    name: 'Nopia Rasa Durian',
    desc: 'Nopia dengan isian durian asli yang harum dan berkarakter. Perpaduan aroma durian kuat dengan tekstur nopia yang unik. Tersedia musiman.',
    specs: [['Harga', 'Rp 26.000'], ['Varian', 'Durian'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–10 hari'], ['Kemasan', 'Plastik kedap udara']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Nopia+Durian'
  },
  kb1: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Jagung Bakar',
    desc: 'Klanting singkong dengan bumbu jagung bakar yang smoky-manis. Tekstur renyah dan rasa unik yang adiktif — cocok untuk camilan santai kapan saja.',
    specs: [['Harga', 'Rp 22.000'], ['Varian', 'Jagung Bakar'], ['Tekstur', 'Renyah'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Jagung+Bakar'
  },
  kb2: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Pedas Manis',
    desc: 'Perpaduan pedas dan manis yang seimbang. Tingkat kepedasan sedang sehingga cocok untuk semua kalangan, termasuk anak-anak yang sudah bisa makan pedas ringan.',
    specs: [['Harga', 'Rp 22.000'], ['Varian', 'Pedas Manis'], ['Tingkat pedas', 'Sedang'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Pedas+Manis'
  },
  kb3: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Bawang',
    desc: 'Aroma bawang goreng yang kuat dengan rasa gurih-asin sempurna. Pilihan favorit untuk teman nonton atau camilan keluarga.',
    specs: [['Harga', 'Rp 22.000'], ['Varian', 'Bawang'], ['Rasa', 'Gurih Bawang'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Bawang'
  },
  kb4: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Keju',
    desc: 'Taburan bumbu keju creamy dan gurih di atas klanting renyah. Perpaduan tradisional dan modern yang disukai kalangan muda.',
    specs: [['Harga', 'Rp 22.000'], ['Varian', 'Keju'], ['Rasa', 'Gurih Keju'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Keju'
  },
  ko1: {
    cat: 'Klanting Original',
    name: 'Klanting Original Besar',
    desc: 'Klanting tanpa bumbu tambahan ukuran besar. Cita rasa singkong asli yang natural, renyah dan ringan. Masa simpan paling panjang di antara semua produk kami.',
    specs: [['Harga', 'Rp 20.000'], ['Varian', 'Original / Polos'], ['Ukuran', 'Besar'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Original+Besar'
  },
  ko2: {
    cat: 'Klanting Original',
    name: 'Klanting Original Kecil',
    desc: 'Klanting original ukuran kecil yang praktis. Ideal untuk isian toples lebaran, souvenir, atau camilan sekali santap.',
    specs: [['Harga', 'Rp 20.000'], ['Varian', 'Original / Polos'], ['Ukuran', 'Kecil'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Original+Kecil'
  },
  ko3: {
    cat: 'Klanting Original',
    name: 'Klanting Original Warna',
    desc: 'Klanting original dengan warna-warni alami yang menarik dari pewarna food grade. Pilihan menarik untuk souvenir pernikahan, ulang tahun, atau hadiah.',
    specs: [['Harga', 'Rp 20.000'], ['Varian', 'Aneka Warna'], ['Pewarna', 'Alami / Food Grade'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']],
    img: 'assets/img/produk/foto.jpeg',
    wa: 'Klanting+Original+Warna'
  }
};

function getAssetPath(src) {
  if (!src) return '';
  const isSubPage = window.location.pathname.includes('/pages/') || (window.location.pathname.endsWith('.html') && !window.location.pathname.endsWith('index.html'));
  if (isSubPage) {
    return src.startsWith('../') ? src : '../' + src;
  } else {
    return src.startsWith('../') ? src.substring(3) : src;
  }
}

function filterCatalog(btn, cat) {
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  let vis = 0;
  document.querySelectorAll('.card').forEach(c => {
    const show = cat === 'all' || c.dataset.cat === cat;
    c.style.display = show ? '' : 'none';
    if (show) vis++;
  });
  const countEl = document.getElementById('count');
  if (countEl) countEl.textContent = vis;
  const emptyEl = document.getElementById('empty');
  if (emptyEl) emptyEl.style.display = vis === 0 ? 'block' : 'none';
}

function openModal(id) {
  const p = prods[id];
  if (!p) return;
  const mi = document.getElementById('m-img');
  if (mi) {
    const resolvedImg = getAssetPath(p.img);
    // Custom fallbacks for each category
    let fallbackImg = getAssetPath('assets/img/produk/foto.jpeg');

    mi.innerHTML = resolvedImg ? `<img src="${resolvedImg}" alt="" onerror="this.src='${fallbackImg}'; this.onerror=function(){ this.style.display='none'; this.nextElementSibling.style.display='flex'; }"><div class="moji" style="display:none">${p.cat === 'Getuk Goreng' ? '🍠' : p.cat === 'Nopia' ? '🟤' : '🌽'}</div>` : `<div class="moji">${p.cat === 'Getuk Goreng' ? '🍠' : p.cat === 'Nopia' ? '🟤' : '🌽'}</div>`;
  }
  const catEl = document.getElementById('m-cat');
  if (catEl) catEl.textContent = p.cat;
  const titleEl = document.getElementById('m-title');
  if (titleEl) titleEl.textContent = p.name;
  const descEl = document.getElementById('m-desc');
  if (descEl) descEl.textContent = p.desc;
  const specsEl = document.getElementById('m-specs');
  if (specsEl) {
    specsEl.innerHTML = p.specs.map(s => `<tr><td>${s[0]}</td><td style="text-align:right">${s[1]}</td></tr>`).join('');
  }
  const waBtn = document.getElementById('m-wa-btn');
  if (waBtn) {
    waBtn.onclick = () => window.open(`https://wa.me/628112615272?text=Halo%2C+saya+ingin+memesan+${p.wa}.+Berapa+harganya%3F`, '_blank');
  }
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.add('open');
}

function closeModal() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('open');
}

function closeOverlayOut(e) {
  const overlay = document.getElementById('overlay');
  if (e.target === overlay) closeModal();
}

// Exposure to global scope
window.filterCatalog = filterCatalog;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeOverlayOut = closeOverlayOut;
