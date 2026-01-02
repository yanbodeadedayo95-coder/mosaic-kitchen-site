// Mobile nav toggle
const btn  = document.getElementById('nav-toggle');
const nav  = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Current year in footer
document.getElementById('yr').textContent = new Date().getFullYear();
