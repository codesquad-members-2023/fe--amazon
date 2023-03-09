const allLink = document.querySelector('.all_link');
const sideBar = document.querySelector('.sidebar');
const dimLayer = document.querySelector('.dim_layer');
const header = document.querySelector('#head_navigation_bar');
const closeButton = document.querySelector('#closeButton');

allLink.addEventListener('click', () => {
  sideBar.style.display = 'flex';
  sideBar.style['z-index'] = '101';
  sideBar.style.animation = 'fadeInLeft 1s forwards';
  dimLayer.style.display = 'block';
  dimLayer.style.background = 'rgba(16, 20, 26, 0.4)';
});

closeButton.addEventListener('click', () => {
  sideBar.style.animation = 'fadeInRight 1s forwards';
  sideBar.style['z-index'] = '';
  //   sideBar.style.display = 'none';
  dimLayer.style.display = 'none';
});
