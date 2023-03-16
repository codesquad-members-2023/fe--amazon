import SubMenuContainer from "./SubMenuContainer";
import { DimmedBody } from "./Dimmed";

export default class SideBar {
  constructor() {
    this.subMenuContainer = new SubMenuContainer();
    this.subMenuContainer.setSubMenuContainer();

    this.allAnchors = document.querySelector(".nav__anchor--all");
    this.sideBar = document.querySelector(".side-bar");
    this.sideBarCloseButton = document.querySelector(".side-bar__close");

    this.showAllButton = document.querySelector(".side-bar__show-all");
    this.otherButtonContainer = document.querySelector(
      ".other-buttons-container__items"
    );
    this.closeAllButton = document.querySelector(
      ".side-bar__button--close-others"
    );

    this.sideBarContent = document.querySelector(".side-bar__content");
    this.sideBarParentButtons = document.querySelectorAll(
      ".side-bar__button--parent"
    );

    [...this.sideBarParentButtons].forEach((el, idx) => {
      el.setAttribute("data-id", `${idx + 1}`);
    });

    this.allSubMenus = document.querySelectorAll(".submenu");
    this.subMenuBack = document.querySelector(".submenu__back");

    this.dimmedBody = new DimmedBody();
  }

  showSideBar(e) {
    e.preventDefault();

    this.dimmedBody.showDimmedBody();
    this.sideBar.classList.add("show-side-bar");
  }

  hideSideBar() {
    this.dimmedBody.hideDimmedBody();
    this.sideBar.classList.remove("show-side-bar");
  }

  unfoldOtherButtons() {
    this.otherButtonContainer.classList.add("show-others");
  }

  foldOtherButtons() {
    this.otherButtonContainer.classList.remove("show-others");
  }

  showSubMenu({ target }) {
    const parentButton = [...this.sideBarParentButtons].find((el) =>
      el.contains(target)
    );

    if (!parentButton) return;

    const {
      dataset: { id },
    } = parentButton;

    this.allSubMenus.forEach((el) => el.classList.add("hidden"));
    const subMenu = [...this.allSubMenus].find(
      (el) => el.dataset.parentId === id
    );

    subMenu.classList.remove("hidden");
    this.subMenuContainer.subMenuContainer.classList.add("show-sub-menu");
  }

  hideSubMenu() {
    this.subMenuContainer.subMenuContainer.classList.remove("show-sub-menu");
  }

  onSideBar() {
    this.allAnchors.addEventListener("click", (e) => {
      this.showSideBar(e);
    });
    this.sideBarCloseButton.addEventListener("click", () => {
      this.hideSideBar();
    });
    this.showAllButton.addEventListener("click", () => {
      this.unfoldOtherButtons();
    });
    this.closeAllButton.addEventListener("click", () => {
      this.foldOtherButtons();
    });
    this.sideBarContent.addEventListener("click", (e) => {
      this.showSubMenu(e);
    });
    this.subMenuBack.addEventListener("click", () => {
      this.hideSubMenu();
    });
  }
}
