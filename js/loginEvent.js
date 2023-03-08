const loginMenu = document.querySelector('#loginMenu');
const loginModal = document.querySelector('.nav_login');
const hoverLoginModal = document.querySelector('.hover_login_modal');
const loginSection = document.querySelector('.login_section');
const body = document.querySelector('body');

loginMenu.addEventListener('mouseover', () => {
  //   loginModal.style.opacity = '0';
  loginModal.style.display = 'none';
  //   hoverLoginModal.style.opacity = '1';
  hoverLoginModal.style.display = 'flex';
  body.style.background = 'rgba(16, 20, 26, 0.4)';
});

loginSection.addEventListener('mouseout', () => {
  //   hoverLoginModal.style.opacity = '0';
  hoverLoginModal.style.display = 'none';
  //   loginModal.style.opacity = '1';
  loginModal.style.display = 'flex';
  body.style.background = '';
});
