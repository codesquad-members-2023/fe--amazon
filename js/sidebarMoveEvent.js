import SIDEBAR_DETAIL from '../data/sidebarData.js';

let mainMenuArr = document.querySelectorAll('.sidebar_main_section');
const sidebar = document.querySelector('.sidebar');
const sidebarData = SIDEBAR_DETAIL.SIDEBAR_DETAIL;

function createHTML(title, data) {
  let htmlForm = `
  <section class="sidebar_section sidebar_detail_section">
    <a href="#">
      <div class="sidebar_detail_back_button">
        <img src="asset/left_arrow_icon.svg" />
        <span>주메뉴</span>
      </div>
    </a>

    <header class="sidebar_section_header">${title}</header>
    <ul class="sidebar_section_list">`;

  data.forEach((menuName) => {
    htmlForm += `<a href="#">
    <li>
    <div>${menuName}</div>
    <img src="asset/right_arrow_icon.svg" />
    </li>
    </a>`;
  });

  htmlForm += `</ul></section>`;
  return htmlForm;
}

mainMenuArr.forEach((mainMenu) => {
  mainMenu.addEventListener('click', (e) => {
    console.log(e.target, e.currentTarget);
    if (
      !e.target.innerText.includes('모두 보기') &&
      e.target.innerText !== '간단히 보기'
    ) {
      const title = e.target.innerText;
      const data = sidebarData[e.target.innerText];

      mainMenuArr.forEach((menu) => {
        menu.style.display = 'none';
        // menu.style.opacity = 0;
        // menu.style['z-index'] = '-2';
      });

      sidebar.innerHTML += createHTML(title, data);
      const detailMenu = document.querySelector('.sidebar_detail_section');
      detailMenu.style.animation = 'appearDetail 0.5s forwards';
      detailMenu.style.display = 'block';

      const backButton = document.querySelector('.sidebar_detail_back_button');
      backButton.addEventListener('click', () => {
        detailMenu.style.display = 'none';
        mainMenuArr = document.querySelectorAll('.sidebar_main_section');
        mainMenuArr.forEach((mainMenu) => {
          mainMenu.style.display = 'block';
          // console.log(mainMenu);
          // mainMenu.style.opacity = 1;
          // mainMenu.style['z-index'] = '';
          mainMenu.style.animation = 'hideDetail 0.5s forwards';
        });
      });
    }
  });
});

// detailMenu.addEventListener('animationend', (e) => {
//   if (e.animationName === 'hideDetail') detailMenu.style.display = 'none';
// });
