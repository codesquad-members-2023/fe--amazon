const mainMenuArr = document.querySelectorAll('.sidebar_main_section');
const detailMenu = document.querySelector('.sidebar_detail_section');
const backButton = document.querySelector('.sidebar_detail_back_button');

[...mainMenuArr].forEach((mainMenu) => {
  mainMenu.addEventListener('click', (e) => {
    // console.log(e);
    if (
      !e.target.innerText.includes('모두 보기') &&
      e.target.innerText !== '간단히 보기'
    ) {
      [...mainMenuArr].map((menu) => {
        menu.style.display = 'none';
      });
      detailMenu.style.animation = 'appearDetail 0.5s forwards';
      detailMenu.style.display = 'block';
    }
  });
});

backButton.addEventListener('click', () => {
  detailMenu.style.display = 'none';
  [...mainMenuArr].forEach((mainMenu) => {
    mainMenu.style.display = 'block';
    mainMenu.style.animation = 'hideDetail 0.5s forwards';
  });
});

// detailMenu.addEventListener('animationend', (e) => {
//   if (e.animationName === 'hideDetail') detailMenu.style.display = 'none';
// });
