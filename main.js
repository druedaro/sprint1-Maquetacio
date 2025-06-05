document.addEventListener('DOMContentLoaded', function() {

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



  const tabs = document.querySelectorAll('.tab');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      tabs.forEach(t => {
        t.classList.remove('border-b-red-600', 'text-black');
        t.classList.add('text-grayish-blue');
        t.classList.remove('md:border-b-red-600');
        t.classList.add('md:border-gray-300');
      });
      
      this.classList.remove('text-grayish-blue', 'md:border-gray-300');
      this.classList.add('border-b-red-600', 'text-black', 'md:border-b-red-600');
      
      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });
      
      const activePanel = document.getElementById(tabId + '-tab');
      if (activePanel) {
        activePanel.classList.remove('hidden');
      }
    });
  });
});