import SIDEBAR_DETAIL from '../data/sidebarData.js';

let mainMenuArr = document.querySelectorAll('.sidebar_main_section');
const sidebar = document.querySelector('.sidebar');
const sidebarData = SIDEBAR_DETAIL.SIDEBAR_DETAIL;

let mainMenuElement = null;

function createHTML(title, data) {
  let htmlForm = `
  <section class="sidebar_section sidebar_detail_section">
    <a href="#">
      <div class="sidebar_detail_back_button ">
        <img src="asset/left_arrow_icon.svg" class=".hover_img" />
        <span>주메뉴</span>
      </div>
    </a>

    <header class="sidebar_section_header">${title}</header>
    <ul class="sidebar_section_list">`;

  data.forEach((menuName) => {
    htmlForm += `<a href="#">
    <li>
    <div>${menuName}</div>
    </li>
    </a>`;
  });

  htmlForm += `</ul></section>`;
  return htmlForm;
}

mainMenuArr.forEach((mainMenu) => {
  mainMenu.addEventListener('click', (e) => {
    const title = e.target.textContent.trim();
    if (Object.keys(sidebarData).includes(title)) {
      const data = sidebarData[title];

      mainMenuArr.forEach((menu) => {
        menu.style.display = 'none';
      });

      if (mainMenuElement !== null) {
        // 만약 이미 상세메뉴를 한번 갔다왔다면... 상세메뉴를 child에 넣어놨다면...
        const detailMenu = document.querySelector('.sidebar_detail_section');
        detailMenu.parentNode.removeChild(detailMenu);
      }

      mainMenuElement = document.createElement('section');
      mainMenuElement.innerHTML = createHTML(title, data);
      sidebar.appendChild(mainMenuElement);

      const detailMenu = document.querySelector('.sidebar_detail_section');
      detailMenu.style.animation = 'appearDetail 0.5s forwards';
      detailMenu.style.display = 'block';

      const backButton = document.querySelector('.sidebar_detail_back_button');
      backButton.addEventListener('click', () => {
        detailMenu.style.display = 'none';
        mainMenuArr = document.querySelectorAll('.sidebar_main_section');
        // 이렇게 하면 click 이벤트가 없어진다. 이 코드 없이 밑에걸 렌더링 해야한다....
        // 하지만 스눕의 element를 저장해뒀다가 appendChild 해줌으로써 해결해버렸다.
        // 스눕 짱!
        mainMenuArr.forEach((mainMenu) => {
          mainMenu.style.animation = 'hideDetail 0.5s forwards';
          mainMenu.style.display = 'block';
        });
      });
      backButton.addEventListener('mouseover', (e) => {
        e.currentTarget.children[0].style.filter = 'brightness(0%)';
      });
      backButton.addEventListener('mouseout', (e) => {
        e.currentTarget.children[0].style.filter = '';
      });
    }
  });
});
