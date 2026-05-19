// Common logic for the site
document.addEventListener('DOMContentLoaded', () => {
  console.log('Haji Tohirin 6A - Website Loaded');
  initHeroSlider();
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

/* HERO SLIDER */
let slideIndex = 0;
let sliderTimer;

function initHeroSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;
  startSliderTimer();
}

function startSliderTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => {
    moveSlide(1);
  }, 5000);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[slideIndex].classList.add('active');
  if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
  startSliderTimer(); // reset timer on manual move
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
  startSliderTimer(); // reset timer on manual move
}

// Exposure to global scope
window.filterProd = filterProd;
window.moveSlide = moveSlide;
window.currentSlide = currentSlide;
