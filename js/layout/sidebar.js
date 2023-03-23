import { $ } from "../utils.js";
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

  addSidebarCategoryData() {
    this.sidebarCategory.insertAdjacentHTML("beforeend", `<hr class="sidebar__line" />`);
    for (const element of sidebarCategoryItems) {
      this.sidebarCategory.insertAdjacentHTML("beforeend", `<li>${element}<img src="./assets/arrow.svg" /></li>`);
    }
  }

  openSidebarCategory() {
    this.openCategoryButton.addEventListener("click", () => {
      this.sidebarCategory.classList.add("sidebar__category-items__show");
      this.closeCategoryButton.style.display = "block";
      this.openCategoryButton.style.display = "none";
    });
  }

  closeSidebarCategory() {
    this.closeCategoryButton.addEventListener("click", () => {
      this.sidebarCategory.classList.remove("sidebar__category-items__show");
      this.closeCategoryButton.style.display = "none";
      this.openCategoryButton.style.display = "block";
    });
  }

  runSidebar() {
    this.openSidebar();
    this.addSidebarCategoryData();
    this.closeSidebar();
    this.openSidebarCategory();
    this.closeSidebarCategory();
  }
}

export { Sidebar };
