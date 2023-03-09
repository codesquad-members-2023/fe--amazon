const allLink = document.querySelector('.all_link');
const sideBar = document.querySelector('.sidebar');

const closeButton = document.querySelector('#closeButton');

allLink.addEventListener('click', () => {
  sideBar.style.display = 'flex';
  body.style.background = 'rgba(16, 20, 26, 0.4)';
});

closeButton.addEventListener('click', () => {
  sideBar.style.display = 'none';
  body.style.background = '';
});
