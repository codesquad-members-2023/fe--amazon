const loginMenu = document.querySelector('.login_section');
const loginModal = document.querySelector('.login_modal');
const headNavBar = document.querySelector('#head_navigation_bar');
const hoverLoginModal = document.querySelector('.hover_login_modal');
const loginSection = document.querySelector('.login_section');
const body = document.querySelector('body');
const dimLayer2 = document.querySelector('.dim_layer');
const shippingRegion = document.querySelector('.menu1');
const selectRegionModal = document.querySelector('.region_modal');

shippingRegion.addEventListener('mouseover', (e) => {
  selectRegionModal.style.display = 'flex';
  header2.style['z-index'] = '101';
  selectRegionModal.style['z-index'] = '101';
  dimLayer2.style.display = 'block';
});

shippingRegion.addEventListener('mouseout', (e) => {
  selectRegionModal.style.display = 'none';
  dimLayer2.style.display = 'none';
  header2.style['z-index'] = '';
  selectRegionModal.style['z-index'] = '';
});

// 마우스가 로그인 영역에 들어간다면 상세 로그인 모달을 띄운다.
headNavBar.addEventListener('mouseover', (e) => {
  // 이렇게 하면 이벤트가 너무 많아져.... 그냥 section mouseenter로 해야함.
  if (e.target.id === 'loginMenu') {
    loginModal.style.display = 'none';
    hoverLoginModal.style.display = 'flex';

    headNavBar.style['z-index'] = '101';
    hoverLoginModal.style['z-index'] = '101';
    dimLayer2.style.display = 'block';
  }
});

// 마우스가 로그인 영역, 모달영역을 벗어날 경우 로그인 모달을 지운다.
loginSection.addEventListener('mouseout', (e) => {
  if (e.currentTarget === loginSection) {
    dimLayer2.style.display = 'none';
    headNavBar.style['z-index'] = '';
    hoverLoginModal.style['z-index'] = '';
    hoverLoginModal.style.display = 'none';
    loginModal.style.display = 'none';
  }
});
