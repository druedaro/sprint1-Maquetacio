// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Open
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Close when click any link
const mobileLinks = document.querySelectorAll('.mobile-menu-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
 