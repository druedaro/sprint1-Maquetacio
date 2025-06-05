const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

const mobileLinks = document.querySelectorAll('.mobile-menu-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
 