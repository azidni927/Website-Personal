// Navbar logic (mobile menu etc.)
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) {
    links.classList.toggle('active');
  }
}

// Close mobile menu when a link is clicked
document.addEventListener('click', (e) => {
  const isLink = e.target.closest('.nav-links a');
  const isToggle = e.target.closest('.nav-toggle');
  const links = document.querySelector('.nav-links');
  
  if (isLink && links) {
    links.classList.remove('active');
  }
  
  // Close when clicking outside
  if (!isLink && !isToggle && links && links.classList.contains('active')) {
    links.classList.remove('active');
  }
});

// Close menu on window resize if it gets larger than 768px
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.remove('active');
  }
});

// Exposure to global scope
window.toggleMenu = toggleMenu;
