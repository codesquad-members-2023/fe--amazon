import { TITLE_DETAIL } from "../model/data.js";
import { SIDEBAR_DETAIL } from "../model/sidebarDetailData.js";

class SidebarInputData {
  constructor() {
    this.sidebar = document.querySelector(".sidebar");
    this.menuExtend = document.querySelector(".sidebar__all-menu_extend");
    this.menuAllBtn = document.querySelector(".sidebar__menu-all");
    this.menuDetailList = document.querySelector(".sidebar__menu_detail");
  }

  init() {
    this.eventListner();
  }

  inputExtendData() {
    if (!this.menuExtend.innerHTML) {
      TITLE_DETAIL.forEach((data) => {
        this.menuExtend.insertAdjacentHTML("beforeend", `<li id=${data.id}><div>${data.title}</div><img src="assets/chevron-right.svg"></li>`);
      });
      this.menuExtend.insertAdjacentHTML("beforeend", `<li class="sidebar_menu_summary"><div>간단히 보기<img src="assets/chevron-top.svg"></div></li>`);
    }
  }

  inputDetailData({ target: { id } }) {
    SIDEBAR_DETAIL.forEach((detailData) => {
      if (id === detailData.textId && !this.menuDetailList.innerHTML) {
        this.menuDetailList.insertAdjacentHTML("beforeEnd", `<div class="sidebar__menu-title">${detailData.title}</div>`);
        detailData.content.forEach((listMenu) => this.menuDetailList.insertAdjacentHTML("beforeEnd", `<li>${listMenu}</li>`));
      }
    });
  }

  eventListner() {
    this.sidebar.addEventListener("click", (e) => this.inputDetailData(e));
    this.menuAllBtn.addEventListener("click", this.inputExtendData.bind(this));
  }
}

export { SidebarInputData };
