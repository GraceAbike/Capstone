const hamburgerEl = document.querySelector('.burger');
const cloXEl = document.querySelector('.X');
const barMobileListEl = document.querySelector('.bar-mobile-list');

const toggleNav = () => {
  hamburgerEl.addEventListener('click', () => {
    barMobileListEl.classList.add('show');
    hamburgerEl.classList.add('hide');
  });

  cloXEl.addEventListener('click', () => {
    barMobileListEl.classList.remove('show');
    hamburgerEl.classList.remove('hide');
  });
};

toggleNav();