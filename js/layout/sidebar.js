import { $ } from "../utils.js";

class Sidebar {
  constructor() {
    this.sidebar = $(".sidebar");
    this.openSidebarButton = $(".sidebar__button-open");
    this.closeSidebarButton = $(".sidebar__button-close");
    this.dimmedLayer = $(".dimmed-layer");
  }

  openSidebar() {
    this.openSidebarButton.addEventListener("click", () => {
      this.sidebar.classList.add("sidebar__active");
      this.closeSidebarButton.classList.add("button__close-show");
      this.dimmedLayer.classList.add("dimmed-layer__show");
      this.dimmedLayer.classList.add("dimmed-layer__zindex");
    });
  }

  closeSidebar() {
    this.closeSidebarButton.addEventListener("click", () => {
      this.sidebar.classList.remove("sidebar__active");
      this.closeSidebarButton.classList.remove("button__close-show");
      this.dimmedLayer.classList.remove("dimmed-layer__show");
      this.dimmedLayer.classList.remove("dimmed-layer__zindex");
    });
  }

  runSidebar() {
    this.openSidebar();
    this.closeSidebar();
  }
}

export { Sidebar };
