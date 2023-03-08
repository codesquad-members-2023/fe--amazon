const loginMenu = document.querySelector('#loginMenu');
const loginModal = document.querySelector('.login_modal');

const hoverLoginModal = document.querySelector('.hover_login_modal');
const loginSection = document.querySelector('.login_section');
const body = document.querySelector('body');

// 마우스가 로그인 영역에 들어간다면 상세 로그인 모달을 띄운다.
loginMenu.addEventListener('mouseover', () => {
  loginModal.style.display = 'none';
  hoverLoginModal.style.display = 'flex';
  body.style.background = 'rgba(16, 20, 26, 0.4)';
});

// 마우스가 로그인 영역, 모달영역을 벗어날 경우 로그인 모달을 지운다.
loginSection.addEventListener('mouseout', () => {
  hoverLoginModal.style.display = 'none';
  loginModal.style.display = 'none';
  body.style.background = '';
});
