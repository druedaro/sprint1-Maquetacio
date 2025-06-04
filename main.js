  //Menu mobile
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('mobileMenuClose');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.remove('invisible', 'opacity-0');
    mobileMenu.classList.add('visible', 'opacity-100');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('invisible', 'opacity-0');
    mobileMenu.classList.remove('visible', 'opacity-100');
  });


// Tabs


