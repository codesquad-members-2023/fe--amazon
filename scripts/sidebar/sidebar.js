class Sidebar {
  constructor() {
    this.dim = document.querySelector(".dim-layer");
    this.sidebar = document.querySelector(".sidebar");
    this.subMenu = document.querySelector(".sub__all-menu");
    this.closebtn = document.querySelector(".sidebar__btn_close");
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
  eventListner() {
    this.subMenu.addEventListener("click", () => {
      this.dimmedSidebar();
      this.showSidebar();
    });
    this.closebtn.addEventListener("click", () => {
      this.clearDimmedSidebar();
      this.closeSidebar();
    });
  }
}
export { Sidebar };
