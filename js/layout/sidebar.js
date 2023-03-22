import { $ } from "../utils.js"

class Sidebar {
  constructor() {
    this.sideBar = $(".sidebar");
    this.openSidebarButton = $(".sidebar__button-open");
    this.closeSidebarButton = $(".sidebar__button-close");
  }

  openSidebar() {
    this.openSidebarButton.addEventListener("click", () => {
      this.sideBar.classList.add("sidebar__active");
      this.closeSidebarButton.classList.add("button__close-show");
    });
  }

  closeSidebar() {
    this.closeSidebarButton.addEventListener("click", () => {
      this.sideBar.classList.remove("sidebar__active");
      this.closeSidebarButton.classList.remove("button__close-show");
    });
  }
}

export { Sidebar };
