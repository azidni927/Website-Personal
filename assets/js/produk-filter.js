// Deteksi path prefix — robust untuk file://, localhost, maupun server
(function() {
  const scripts = document.querySelectorAll('script[src]');
  let inPages = false;
  scripts.forEach(s => {
    if (s.src.includes('/pages/')) inPages = true;
  });
  if (!inPages) {
    inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
  }
  window._PRODUK_BASE = inPages ? '../assets/img/produk/' : 'assets/img/produk/';
})();

const prods = {
  getuk1: {
    cat: 'Getuk Goreng',
    name: 'Getuk Goreng Haji Tohirin 1 KG',
    price: 'Rp 36.000',
    desc: 'Getuk goreng asli Sokaraja dengan cita rasa khas gula merah dan singkong pilihan. Digoreng hingga renyah di luar dan lembut di dalam. Produk andalan kami yang paling banyak dicari sebagai oleh-oleh dari Banyumas.',
    specs: [['Berat', '1 Kilogram'], ['Bahan', 'Singkong & Gula Merah'], ['Masa simpan', '3–5 hari suhu ruang'], ['Kemasan', 'Box karton kedap']],
    img: 'getuk1kg_1.jpeg',
    badge: 'Terlaris',
    wa: 'Getuk+Goreng+1+KG'
  },
  getuk2: {
    cat: 'Getuk Goreng',
    name: 'Getuk Goreng Haji Tohirin 1/2 KG',
    price: 'Rp 18.000',
    desc: 'Versi setengah kilogram dari getuk goreng andalan kami. Ideal untuk oleh-oleh personal atau untuk dicoba sebelum memesan lebih banyak.',
    specs: [['Berat', '½ Kilogram'], ['Bahan', 'Singkong & Gula Merah'], ['Masa simpan', '3–5 hari suhu ruang'], ['Kemasan', 'Box karton kedap']],
    img: 'getuk1kg_2.jpeg',
    wa: 'Getuk+Goreng+%C2%BD+KG'
  },
  nopia1: {
    cat: 'Nopia',
    name: 'Nopia Gula Jawa',
    price: 'Rp 26.000',
    desc: 'Nopia khas Banyumas berbentuk bulat dengan kulit tipis renyah dan isian gula aren manis yang harum. Cita rasa karamel alami yang tidak terlalu manis.',
    specs: [['Varian', 'Gula Jawa / Gula Aren'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–14 hari'], ['Kemasan', 'Plastik kedap udara']],
    img: 'nopia_gulajawa.jpeg',
    wa: 'Nopia+Gula+Jawa'
  },
  nopia2: {
    cat: 'Nopia',
    name: 'Nopia Rasa Coklat',
    price: 'Rp 26.000',
    desc: 'Nopia dengan isian coklat lembut yang berpadu sempurna dengan kulit renyah. Favorit anak-anak dan pecinta coklat yang ingin cita rasa modern dalam wadah tradisional.',
    specs: [['Varian', 'Coklat'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–14 hari'], ['Kemasan', 'Plastik kedap udara']],
    img: 'nopia_coklat1.jpeg',
    wa: 'Nopia+Coklat'
  },
  nopia3: {
    cat: 'Nopia',
    name: 'Nopia Rasa Durian',
    price: 'Rp 26.000',
    desc: 'Nopia dengan isian durian asli yang harum dan berkarakter. Perpaduan aroma durian kuat dengan tekstur nopia yang unik. Tersedia musiman.',
    specs: [['Varian', 'Durian'], ['Bentuk', 'Bulat, ukuran sedang'], ['Masa simpan', '7–10 hari'], ['Kemasan', 'Plastik kedap udara']],
    img: 'nopia_durian1.jpeg',
    wa: 'Nopia+Durian'
  },
  kb1: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Jagung Bakar',
    price: 'Rp 22.000',
    desc: 'Klanting singkong dengan bumbu jagung bakar yang smoky-manis. Tekstur renyah dan rasa unik yang adiktif — cocok untuk camilan santai kapan saja.',
    specs: [['Varian', 'Jagung Bakar'], ['Tekstur', 'Renyah'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'klanting_bumbu_jagungbakar.jpeg',
    wa: 'Klanting+Jagung+Bakar'
  },
  kb2: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Pedas Manis',
    price: 'Rp 22.000',
    desc: 'Perpaduan pedas dan manis yang seimbang. Tingkat kepedasan sedang sehingga cocok untuk semua kalangan, termasuk anak-anak yang sudah bisa makan pedas ringan.',
    specs: [['Varian', 'Pedas Manis'], ['Tingkat pedas', 'Sedang'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'klanting_bumbu_pedasmanis.jpeg',
    wa: 'Klanting+Pedas+Manis'
  },
  kb3: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Bawang',
    price: 'Rp 22.000',
    desc: 'Aroma bawang goreng yang kuat dengan rasa gurih-asin sempurna. Pilihan favorit untuk teman nonton atau camilan keluarga.',
    specs: [['Varian', 'Bawang'], ['Rasa', 'Gurih Bawang'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'klanting_bumbu_bawang.jpeg',
    wa: 'Klanting+Bawang'
  },
  kb4: {
    cat: 'Klanting Bumbu',
    name: 'Klanting Bumbu Keju',
    price: 'Rp 22.000',
    desc: 'Taburan bumbu keju creamy dan gurih di atas klanting renyah. Perpaduan tradisional dan modern yang disukai kalangan muda.',
    specs: [['Varian', 'Keju'], ['Rasa', 'Gurih Keju'], ['Masa simpan', '14–21 hari'], ['Kemasan', 'Plastik standing pouch']],
    img: 'klanting_bumbu_keju.jpeg',
    wa: 'Klanting+Keju'
  },
  ko1: {
    cat: 'Klanting Original',
    name: 'Klanting Original Besar',
    price: 'Rp 20.000',
    desc: 'Klanting tanpa bumbu tambahan ukuran besar. Cita rasa singkong asli yang natural, renyah dan ringan. Masa simpan paling panjang di antara semua produk kami.',
    specs: [['Varian', 'Original / Polos'], ['Ukuran', 'Besar'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']],
    img: 'klanting_originalbesar.jpeg',
    wa: 'Klanting+Original+Besar'
  },
  ko2: {
    cat: 'Klanting Original',
    name: 'Klanting Original Kecil',
    price: 'Rp 20.000',
    desc: 'Klanting original ukuran kecil yang praktis. Ideal untuk isian toples lebaran, souvenir, atau camilan sekali santap.',
    specs: [['Varian', 'Original / Polos'], ['Ukuran', 'Kecil'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']],
    img: 'klanting_originalkecil.jpeg',
    wa: 'Klanting+Original+Kecil'
  },
  ko3: {
    cat: 'Klanting Original',
    name: 'Klanting Original Warna',
    price: 'Rp 20.000',
    desc: 'Klanting original dengan warna-warni alami yang menarik dari pewarna food grade. Pilihan menarik untuk souvenir pernikahan, ulang tahun, atau hadiah.',
    specs: [['Varian', 'Aneka Warna'], ['Pewarna', 'Alami / Food Grade'], ['Masa simpan', '30+ hari'], ['Kemasan', 'Plastik kedap']],
    img: 'klanting_originalwarna.jpeg',
    wa: 'Klanting+Original+Warna'
  }
};

function getFallbackEmoji(cat) {
  if (cat === 'Getuk Goreng')    return '🍠';
  if (cat === 'Nopia')           return '🟤';
  if (cat === 'Klanting Bumbu')  return '🌽';
  if (cat === 'Klanting Original') return '⭕';
  return '🍱';
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

  const BASE = window._PRODUK_BASE || 'assets/img/produk/';
  const emoji = getFallbackEmoji(p.cat);

  // ── Foto + badge ──
  const mi = document.getElementById('m-img');
  if (mi) {
    mi.style.position = 'relative';
    const badgeHTML = p.badge
      ? `<span style="
            position:absolute;top:12px;left:12px;
            background:var(--g);color:var(--h);
            font-size:10px;font-weight:700;
            padding:3px 10px;border-radius:2px;
            letter-spacing:0.06em;text-transform:uppercase;
            z-index:5;
          ">${p.badge}</span>`
      : '';

    if (p.img) {
      mi.innerHTML = `
        <img src="${BASE + p.img}" alt="${p.name}"
          style="width:100%;height:100%;object-fit:cover;display:block"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="moji" style="display:none">${emoji}</div>
        ${badgeHTML}
      `;
    } else {
      mi.innerHTML = `<div class="moji">${emoji}</div>${badgeHTML}`;
    }
  }

  // ── Kategori ──
  const catEl = document.getElementById('m-cat');
  if (catEl) catEl.textContent = p.cat;

  // ── Judul ──
  const titleEl = document.getElementById('m-title');
  if (titleEl) titleEl.textContent = p.name;

  // ── Harga prominent (sisipkan setelah judul) ──
  let priceEl = document.getElementById('m-price');
  if (!priceEl) {
    priceEl = document.createElement('div');
    priceEl.id = 'm-price';
    priceEl.className = 'modal-price';
    // sisipkan tepat setelah m-title
    if (titleEl && titleEl.parentNode) {
      titleEl.parentNode.insertBefore(priceEl, titleEl.nextSibling);
    }
  }
  priceEl.textContent = p.price || '';

  // ── Deskripsi ──
  const descEl = document.getElementById('m-desc');
  if (descEl) descEl.textContent = p.desc;

  // ── Spesifikasi (tanpa baris Harga — sudah di atas) ──
  const specsEl = document.getElementById('m-specs');
  if (specsEl) {
    specsEl.innerHTML = p.specs
      .map(s => `<tr><td>${s[0]}</td><td style="text-align:right">${s[1]}</td></tr>`)
      .join('');
  }

  // ── Tombol WhatsApp ──
  const waBtn = document.getElementById('m-wa-btn');
  if (waBtn) {
    waBtn.onclick = () =>
      window.open(
        `https://wa.me/628112615272?text=Halo%2C+saya+ingin+memesan+${p.wa}.+Berapa+harganya%3F`,
        '_blank'
      );
  }

  // ── Buka overlay ──
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
window.filterCatalog   = filterCatalog;
window.openModal       = openModal;
window.closeModal      = closeModal;
window.closeOverlayOut = closeOverlayOut;
