const loginMenu = document.querySelector('#loginMenu');
const loginModal = document.querySelector('.nav_login');
const hoverLoginModal = document.querySelector('.hover_login_modal');
const body = document.querySelector('body');

loginMenu.addEventListener('mouseover', () => {
  loginModal.style.opacity = '0';
  hoverLoginModal.style.opacity = '1';
  body.style.background = 'rgba(16, 20, 26, 0.4)';
});
