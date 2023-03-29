import { TITLE_DETAIL } from "../model/data.js";
import { SIDEBAR_DETAIL } from "../model/sidebarDetailData.js";

class SidebarInputData {
  constructor() {
    this.sidebar = document.querySelector(".sidebar");
    this.menuExtend = document.querySelector(".sidebar__all-menu_extend");
    this.menuAllBtn = document.querySelector(".sidebar__menu-all");
    this.menuDetailList = document.querySelector(".sidebar__menu_detail");
    this.menuDetailbox = document.querySelector(".sidebar_detail");
    this.backMain = document.querySelector(".back-to-main");
  }
  init() {
    this.eventList();
  }
  summarySidebar({ target: className }) {
    console.log(className.className);
    if (className.className === "sidebar_menu_summary") {
      this.menuExtend.classList.add("close_display");
    }
  }

  saveMenuExtendData() {
    if (!this.menuExtend.innerHTML) {
      TITLE_DETAIL.forEach((data) => {
        this.menuExtend.insertAdjacentHTML("beforeend", `<li id=${data.id}><div>${data.title}</div><img src="assets/chevron-right.svg"></li>`);
      });
      this.menuExtend.insertAdjacentHTML("beforeend", `<li class="sidebar_menu_summary"><div>간단히 보기<img src="assets/chevron-top.svg"></div></li>`);
    } else {
      this.menuExtend.style.display = "";
    }
  }

  showMainMenuDetail({ target: { id } }) {
    if (id) {
      this.menuDetailbox.classList.add("show_display");
    }
    SIDEBAR_DETAIL.forEach((detailData) => {
      if (id === detailData.textId && !this.menuDetailList.innerHTML) {
        this.menuDetailList.insertAdjacentHTML("beforeEnd", `<div class="sidebar__menu-title">${detailData.title}</div>`);
        detailData.content.forEach((listMenu) => this.menuDetailList.insertAdjacentHTML("beforeEnd", `<li>${listMenu}</li>`));
      } else {
        this.menuDetailList.style.display = "";
      }
    });
  }
  closeSidebarDetail() {
    this.menuDetailbox.classList.remove("show_display");
    this.menuDetailList.innerHTML = "";
  }

  eventList() {
    this.sidebar.addEventListener("click", (el) => {
      this.showMainMenuDetail(el);
      this.summarySidebar(el);
    });
    this.backMain.addEventListener("click", this.closeSidebarDetail.bind(this));
    this.menuAllBtn.addEventListener("click", this.saveMenuExtendData.bind(this));
  }
}

export { SidebarInputData };
