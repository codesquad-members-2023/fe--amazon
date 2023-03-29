const allLink = document.querySelector('.all_link');
const sideBar = document.querySelector('.sidebar');
const dimLayer = document.querySelector('.dim_layer');
const header = document.querySelector('#head_navigation_bar');
const closeButton = document.querySelector('#closeButton');
const allButton = document.querySelector('.sidebar_all_button');
const hiddenMenus = document.querySelector('.sidebar_hidden_menus');
const hiddenButton = document.querySelector('.sidebar_hidden_button');
const hoverAreaArr = document.querySelectorAll('.hover_img');

allButton.addEventListener('click', () => {
  hiddenMenus.classList.toggle('hidden_menus_appear');
});

hiddenButton.addEventListener('click', () => {
  hiddenMenus.classList.remove('hidden_menus_appear');
});

sideBar.addEventListener('click', (e) => {});

allLink.addEventListener('click', () => {
  // 모두 버튼을 누를 때 애니메이션
  sideBar.style.display = 'flex';
  sideBar.style['z-index'] = '101';
  sideBar.style.animation = 'fadeInLeft 0.5s forwards';
  dimLayer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  // 닫기 버튼을 누를떄 애니메이션
  sideBar.style.animation = 'fadeInRight 0.5s forwards';
  closeButton.style.display = 'none';
  dimLayer.style.display = 'none';
});

sideBar.addEventListener('animationend', (e) => {
  // animation이 끝나는 event를 listen해서 animation 이름이 fadeInRight인 animation이 end 될때만
  // sideBar의 display가 none이 되도록 하였다.
  // 만약 그냥 해버리면 사이드바가 등장하는 animation에서도 display를 none으로 설정하게 되어 오류가 생긴다.
  if (e.animationName === 'fadeInLeft') closeButton.style.display = 'block';
  if (e.animationName === 'fadeInRight') sideBar.style.display = 'none';
  // if (e.animationName === 'fadeInDown') hiddenMenus.style.display = 'none';
});
