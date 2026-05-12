// Common logic for the site
document.addEventListener('DOMContentLoaded', () => {
  console.log('Haji Tohirin 6A - Website Loaded');
});

function filterProd(btn, cat) {
  const tabs = document.querySelectorAll('.cat-tab');
  const cards = document.querySelectorAll('.product-card');
  
  tabs.forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  
  cards.forEach(c => {
    if (cat === 'all' || c.dataset.cat === cat) {
      c.style.display = '';
    } else {
      c.style.display = 'none';
    }
  });
}

// Exposure to global scope
window.filterProd = filterProd;
