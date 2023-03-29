import { SIDEBAR } from "../all/allQuery.js";
import { TITLE_DETAIL } from "../model/data.js";
import { SIDEBAR_DETAIL } from "../model/sidebarDetailData.js";

const summarySidebar = () => {
  SIDEBAR.ALL.addEventListener("click", (e) => {
    if (e.target.className === "sidebar_menu_summary") SIDEBAR.MENUDETAIL.style.display = "none";
  });
};

const detailSidebar = () => {
  SIDEBAR.MENUALLBUTTON.addEventListener("click", () => {
    if (!SIDEBAR.MENUDETAIL.innerHTML) {
      TITLE_DETAIL.forEach((data) => {
        SIDEBAR.MENUDETAIL.insertAdjacentHTML("beforeend", `<li id=${data.id}><div>${data.title}</div><img src="assets/chevron-right.svg"></li>`);
      });
      SIDEBAR.MENUDETAIL.insertAdjacentHTML("beforeend", `<li class="sidebar_menu_summary"><div>간단히 보기<img src="assets/chevron-top.svg"></div></li>`);
    } else {
      SIDEBAR.MENUDETAIL.style.display = "";
    }
  });
};
//메뉴 클릭 시 디테일 메뉴 표시
const showMainMenuDetail = ({ target: { id } }) => {
  SIDEBAR_DETAIL.forEach((detailData) => {
    if (id === detailData.textId && !SIDEBAR.MAIN_MENU_DETAIL.innerHTML) {
      SIDEBAR.MAIN_MENU_DETAIL.insertAdjacentHTML("beforeEnd", `<div class="sidebar__menu-title">${detailData.title}</div>`);
      detailData.content.forEach((listMenu) => SIDEBAR.MAIN_MENU_DETAIL.insertAdjacentHTML("beforeEnd", `<li>${listMenu}</li>`));
    } else {
      SIDEBAR.MAIN_MENU_DETAIL.style.display = "";
    }
  });
};

const showSidebarDetail = ({ target: { id } }) => {
  if (id) {
    SIDEBAR.SUB_DETAIL.classList.add("show_display");
  }
};

const closeSidebarDetail = () => SIDEBAR.SUB_DETAIL.classList.remove("show_display");
const deleteSidebarDetail = () => (SIDEBAR.MAIN_MENU_DETAIL.innerHTML = "");
const showDetail = () => {
  SIDEBAR.ALL.addEventListener("click", showSidebarDetail);
  SIDEBAR.ALL.addEventListener("click", showMainMenuDetail);
  SIDEBAR.BACK_MAIN.addEventListener("click", closeSidebarDetail);
  SIDEBAR.BACK_MAIN.addEventListener("click", deleteSidebarDetail);
};

const sidebarEvent = () => {
  summarySidebar();
  detailSidebar();
  showDetail();
};

sidebarEvent();
