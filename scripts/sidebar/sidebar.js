class Sidebar {
  constructor() {
    this.dim = document.querySelector(".dim-layer");
    this.sidebar = document.querySelector(".sidebar");
    this.subMenu = document.querySelector(".sub__all-menu");
    this.closebtn = document.querySelector(".sidebar__btn_close");
    this.menuExtend = document.querySelector(".sidebar__all-menu_extend");
    this.backMain = document.querySelector(".back-to-main");
    this.menuDetailList = document.querySelector(".sidebar__menu_detail");
    this.menuDetailbox = document.querySelector(".sidebar_detail");
  }
  init() {
    this.eventListner();
  }
  dimmedSidebar() {
    this.dim.classList.add("show_opacity", "sidebar_index");
  }
  clearDimmedSidebar() {
    this.dim.classList.remove("show_opacity", "sidebar_index");
  }
  showSidebar() {
    this.sidebar.classList.add("show_display");
  }
  closeSidebar() {
    this.sidebar.classList.remove("show_display");
  }

  closeSidebarExtend(className) {
    if (className === "sidebar_menu_summary") {
      this.menuExtend.classList.add("close_display");
    }
  }

  closeSidebarDetail() {
    this.menuDetailbox.classList.remove("show_display");
    this.menuDetailList.innerHTML = "";
  }

  showSidebarDetail(id) {
    if (id) {
      this.menuDetailbox.classList.add("show_display");
    }
  }

  eventListner() {
    this.subMenu.addEventListener("click", () => {
      this.dimmedSidebar();
      this.showSidebar();
    });
    this.closebtn.addEventListener("click", () => {
      this.clearDimmedSidebar();
      this.closeSidebar();
    });
    this.backMain.addEventListener("click", this.closeSidebarDetail.bind(this));
    this.sidebar.addEventListener("click", (e) => {
      this.closeSidebarExtend(e.target.className);
      this.showSidebarDetail(e.target.id);
    });
  }
}
export { Sidebar };
