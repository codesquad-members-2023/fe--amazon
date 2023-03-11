// login 팝업 element
const logInAnchor = document.querySelector(".header__anchor--login");
const expandedLogInPopUp = document.querySelector(".pop-up__expanded");

const logInPopUp = document.querySelector(".pop-up--login");
const loginContainer = document.querySelector(".container--login");

// 배송지 팝업 element
const shippingAddressAnchor = document.querySelector(
  ".header__anchor--shipping-address"
);
const shippingAddressPopUp = document.querySelector(
  ".pop-up--shipping-address"
);
const shippingAddressContainer = document.querySelector(
  ".container--shipping-address"
);

// layer 추가
const dimmedMain = document.querySelector(".dimmed--main");
const dimmedBody = document.querySelector(".dimmed--body");

// side-bar
const allAnchor = document.querySelector(".nav__anchor--all");
const sideBar = document.querySelector(".side-bar");
const sideBarCloseButton = document.querySelector(".side-bar__close");

// 모두 보기
const showAllButton = document.querySelector(".side-bar__show-all");
const otherButtonContainer = document.querySelector(
  ".other-buttons-container__items"
);
const closeAllButton = document.querySelector(
  ".side-bar__button--close-others"
);

// submenu
const sideBarContent = document.querySelector(".side-bar__content");
const sideBarParentButtons = document.querySelectorAll(
  ".side-bar__button--parent"
);
const subMenus = document.querySelector(".submenus");
const allSubMenus = document.querySelectorAll(".submenu");
const allSubMenuBacks = document.querySelectorAll(".submenu__back");

const showPopUpWithDelay = (delay) => setTimeout(showLogInPopUp, delay);

const showDimmedMain = () => {
  dimmedMain.classList.remove("hidden");
};

const hideDimmedMain = () => {
  dimmedMain.classList.add("hidden");
};

const showDimmedBody = () => {
  dimmedBody.classList.remove("hidden");
};

const hideDimmedBody = () => {
  dimmedBody.classList.add("hidden");
};

const showLogInPopUp = () => {
  logInPopUp.classList.remove("hidden");
};

const hideLogInPopUp = () => {
  logInPopUp.classList.add("hidden");
};

const showExpandedLogInPopUp = () => {
  showLogInPopUp();
  showDimmedMain();
  expandedLogInPopUp.classList.remove("hidden");
};

const hideExpandedLogInPopUp = () => {
  hideLogInPopUp();
  hideDimmedMain();
  expandedLogInPopUp.classList.add("hidden");
};

const showShippingAddressPopUp = () => {
  showDimmedMain();
  shippingAddressPopUp.classList.remove("hidden");
};

const hideShippingAddressPopUp = () => {
  hideDimmedMain();
  shippingAddressPopUp.classList.add("hidden");
};

const showSideBar = (e) => {
  e.preventDefault();

  showDimmedBody();
  sideBar.classList.remove("hidden");
  sideBar.classList.remove("hide-side-bar");
  sideBar.classList.add("show-side-bar");
};

const hideSideBar = () => {
  hideDimmedBody();
  sideBar.classList.remove("show-side-bar");
  sideBar.classList.add("hide-side-bar");
};

const unfoldOtherButtons = () => {
  otherButtonContainer.classList.remove("hidden");
  otherButtonContainer.classList.remove("hide-others");
  otherButtonContainer.classList.add("show-others");
};

const foldOtherButtons = () => {
  otherButtonContainer.classList.remove("show-others");
  otherButtonContainer.classList.add("hide-others");
};

const showSubMenu = (e) => {
  if (subMenus.contains(e.target)) return;

  const parentButton = [...sideBarParentButtons].find((el) =>
    el.contains(e.target)
  );
  const id = parentButton.dataset.id;
  const subMenu = [...allSubMenus].find((el) => el.dataset.parentId === id);

  subMenu.classList.remove("hide-sub-menu");
  subMenu.classList.add("show-sub-menu");
};

const hideSubMenu = (subMenuBack) => {
  subMenuBack.parentElement.classList.remove("show-sub-menu");
  subMenuBack.parentElement.classList.add("hide-sub-menu");
};

const setHeader = () => {
  logInAnchor.addEventListener("mouseenter", showExpandedLogInPopUp);
  loginContainer.addEventListener("mouseleave", hideExpandedLogInPopUp);
  shippingAddressAnchor.addEventListener(
    "mouseenter",
    showShippingAddressPopUp
  );
  shippingAddressContainer.addEventListener(
    "mouseleave",
    hideShippingAddressPopUp
  );
};

const setSideBar = () => {
  allAnchor.addEventListener("click", (e) => {
    showSideBar(e);
  });
  sideBarCloseButton.addEventListener("click", hideSideBar);
  showAllButton.addEventListener("click", unfoldOtherButtons);
  closeAllButton.addEventListener("click", foldOtherButtons);
  sideBarContent.addEventListener("click", (e) => {
    showSubMenu(e);
  });
  [...allSubMenuBacks].forEach((subMenuBack) => {
    subMenuBack.addEventListener("click", () => hideSubMenu(subMenuBack));
  });
};

const main = () => {
  showPopUpWithDelay(1000);
  setHeader();
  setSideBar();
};

main();
