const mainMenuArr = document.querySelectorAll('.sidebar_main_section');
const detailMenu = document.querySelector('.sidebar_detail_section');

[...mainMenuArr].forEach((mainMenu) => {
  mainMenu.addEventListener('click', (e) => {
    console.log(e);
    if (
      !e.target.innerText.includes('모두 보기') &&
      e.target.innerText !== '간단히 보기'
    ) {
      console.log('이지은바보');
      [...mainMenuArr].map((menu) => {
        menu.style.display = 'none';
      });
      // detailMenu.style.animation = 'fadeInDetail 1s forwards';
      detailMenu.style.display = 'block';
    }
  });
});
