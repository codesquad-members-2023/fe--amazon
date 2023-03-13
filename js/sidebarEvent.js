const allLink = document.querySelector('.all_link');
const sideBar = document.querySelector('.sidebar');
const dimLayer = document.querySelector('.dim_layer');
const header = document.querySelector('#head_navigation_bar');
const closeButton = document.querySelector('#closeButton');
const allButton = document.querySelector('.sidebar_all_button');
const hiddenMenus = document.querySelector('.sidebar_hidden_menus');
const hiddenButton = document.querySelector('.sidebar_hidden_button');
const hoverAreaArr = document.querySelectorAll('.hover_img');
// console.log(hoverAreaArr);

const areaArr = [...hoverAreaArr].map((hoverArea) => hoverArea.parentNode);

areaArr.forEach((area) => {
  area.addEventListener('mouseover', (e) => {
    e.target.children[1].style.filter = 'brightness(0%)';
  });
  area.addEventListener('mouseout', (e) => {
    e.target.children[1].style.filter = '';
  });
});

allLink.addEventListener('click', () => {
  sideBar.style.display = 'flex';
  sideBar.style['z-index'] = '101';
  sideBar.style.animation = 'fadeInLeft 0.5s forwards';
  dimLayer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  sideBar.style.animation = 'fadeInRight 0.5s forwards';
  sideBar.style['z-index'] = '-1';
  // z-index를 ''로 설정했을 시 닫고난 후 모두 버튼이 클릭되지 않는 현상 발생
  // 이걸 왜 해야하냐면 sideBar의 display를 none으로 설정하는 것은 animation이 끝날때 해야하기 때문에
  // 일단 z-index를 -1로 두는 것이다!
  // z-index를 -1로 둠으로써 문제 해결.
  closeButton.style.display = 'none';
  dimLayer.style.display = 'none';
});

sideBar.addEventListener('animationend', (e) => {
  if (e.animationName === 'fadeInLeft') closeButton.style.display = 'block';
});

sideBar.addEventListener('animationend', (e) => {
  // animation이 끝나는 event를 listen해서 animation 이름이 fadeInRight인 animation이 end 될때만
  // sideBar의 display가 none이 되도록 하였다.
  // 만약 그냥 해버리면 사이드바가 등장하는 animation에서도 display를 none으로 설정하게 되어 오류가 생긴다.
  if (e.animationName === 'fadeInRight') sideBar.style.display = 'none';
});

allButton.addEventListener('click', () => {
  hiddenMenus.style.display = 'block';
  hiddenMenus.style.animation = 'fadeInUp 0.5s forwards';
});

hiddenButton.addEventListener('click', () => {
  hiddenMenus.style.animation = 'fadeInDown 0.4s forwards';
});

hiddenMenus.addEventListener('animationend', (e) => {
  if (e.animationName === 'fadeInDown') hiddenMenus.style.display = 'none';
});
