// Navbar logic (mobile menu etc.)
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const toggle = document.querySelector('.nav-toggle');
  let overlay = document.querySelector('.nav-overlay');

  // Create overlay if it doesn't exist
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => closeMenu());
  }

  const isOpen = links && links.classList.contains('active');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  const links = document.querySelector('.nav-links');
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.nav-overlay');

  if (links) links.classList.add('active');
  if (toggle) toggle.classList.add('active');
  if (overlay) {
    overlay.style.display = 'block';
    // Trigger reflow for transition
    overlay.offsetHeight;
    overlay.classList.add('active');
  }

  // Prevent body scroll while menu is open
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const links = document.querySelector('.nav-links');
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.nav-overlay');

  if (links) links.classList.remove('active');
  if (toggle) toggle.classList.remove('active');
  if (overlay) {
    overlay.classList.remove('active');
    // Wait for fade-out transition before hiding
    setTimeout(() => {
      if (!overlay.classList.contains('active')) {
        overlay.style.display = 'none';
      }
    }, 300);
  }

  document.body.style.overflow = '';
}

// Close mobile menu when a link is clicked
document.addEventListener('click', (e) => {
  const isLink = e.target.closest('.nav-links a');
  if (isLink) {
    closeMenu();
  }
});

// Close menu on window resize if wider than 768px
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// Expose to global scope
window.toggleMenu = toggleMenu;
window.openMenu = openMenu;
window.closeMenu = closeMenu;
