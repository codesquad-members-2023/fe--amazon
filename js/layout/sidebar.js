import { $, modifyClassList } from "../utils.js";
import { sidebarCategoryItems } from "../data/sidebarCategory.js";

class Sidebar {
  constructor() {
    this.sidebar = $(".sidebar");
    this.openSidebarButton = $(".sidebar__button-open");
    this.closeSidebarButton = $(".sidebar__button-close");
    this.dimmedLayer = $(".dimmed-layer");
    this.sidebarCategory = $(".sidebar__category-items");
    this.openCategoryButton = $(".sidebar__category-open");
    this.closeCategoryButton = $(".sidebar__category-close");
  }

  init() {
    this.addSidebarCategoryData();
    this.sidebarEventListener();
  }

  sidebarEventListener() {
    this.openSidebarButton.addEventListener("click", () => this.toggleSidebar());
    this.closeSidebarButton.addEventListener("click", () => this.toggleSidebar());
    this.openCategoryButton.addEventListener("click", () => this.openSidebarCategory());
    this.closeCategoryButton.addEventListener("click", () => this.closeSidebarCategory());
  }

  toggleSidebar() {
    modifyClassList(this.sidebar, "sidebar__active", "toggle");
    modifyClassList(this.closeSidebarButton, "button__close-show", "toggle");
    modifyClassList(this.dimmedLayer, "dimmed-layer__show", "toggle");
    modifyClassList(this.dimmedLayer, "dimmed-layer__zindex", "toggle");
  }

  openSidebarCategory() {
    modifyClassList(this.sidebarCategory, "sidebar__category-items__show", "add");
    this.closeCategoryButton.style.display = "block";
    this.openCategoryButton.style.display = "none";
  }

  closeSidebarCategory() {
    modifyClassList(this.sidebarCategory, "sidebar__category-items__show", "remove");
    this.closeCategoryButton.style.display = "none";
    this.openCategoryButton.style.display = "block";
  }

  addSidebarCategoryData() {
    this.sidebarCategory.insertAdjacentHTML("beforeend", `<hr class="sidebar__line" />`);
    for (const element of sidebarCategoryItems) {
      this.sidebarCategory.insertAdjacentHTML("beforeend", `<li>${element}<img src="./assets/arrow.svg" /></li>`);
    }
  }
}

export { Sidebar };
