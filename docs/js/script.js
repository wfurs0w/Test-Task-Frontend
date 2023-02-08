document.addEventListener('DOMContentLoaded', () => {
  const panelBtn = document.querySelectorAll('.panel__dropdown-btn');

  panelBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.panel__dropdown').querySelector('.dropdown');

      drop.classList.toggle('dropdown--active');
    });
  });
});