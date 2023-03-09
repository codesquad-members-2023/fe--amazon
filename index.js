// login 팝업 element
const logInAnchor = document.querySelector(".header__anchor--login");
const seperatorLine = document.querySelector(".seperator-line");
const logInPopUpList = document.querySelector(".pop-up__list");
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

// aside
const allAnchor = document.querySelector(".nav__anchor--all");
const sideBar = document.querySelector(".side-bar");
const sideBarCloseButton = document.querySelector(".side-bar__close");

// sidebar
const sideBarContent = document.querySelector(".side-bar__content");
const sideBarParentAnchors = document.querySelectorAll(
  ".side-bar__anchor--parent"
);
const subMenus = document.querySelector(".submenus");
const allSubMenus = document.querySelectorAll(".submenu");
const allSubMenuBacks = document.querySelectorAll(".submenu__back");

function showPopUpWithDelay(delay) {
  setTimeout(() => {
    logInPopUp.classList.remove("hidden");
  }, delay);
}

function main() {
  showPopUpWithDelay(1000);

  // login 레이어 팝업 mouseenter
  logInAnchor.addEventListener("mouseenter", () => {
    seperatorLine.classList.remove("hidden");
    logInPopUpList.classList.remove("hidden");
    logInPopUp.classList.remove("hidden");
    dimmedMain.classList.remove("hidden");
  });

  // login 레이어 팝업 mouseleave
  loginContainer.addEventListener("mouseleave", () => {
    logInPopUp.classList.add("hidden");
    dimmedMain.classList.add("hidden");
  });

  // shipping address 레이어 팝업 mouseenter
  shippingAddressAnchor.addEventListener("mouseenter", () => {
    shippingAddressPopUp.classList.remove("hidden");
    dimmedMain.classList.remove("hidden");
  });

  // shipping address 레이어 팝업 mouseleave
  shippingAddressContainer.addEventListener("mouseleave", () => {
    shippingAddressPopUp.classList.add("hidden");
    dimmedMain.classList.add("hidden");
  });

  // 사이드바 click
  allAnchor.addEventListener("click", (e) => {
    e.preventDefault();

    dimmedBody.classList.remove("hidden");
    sideBar.classList.remove("hidden");
  });

  // 사이드바 닫기 버튼 click
  sideBarCloseButton.addEventListener("click", (e) => {
    e.preventDefault();

    dimmedBody.classList.add("hidden");
    sideBar.classList.add("hidden");
  });

  // submenu 열기
  sideBarContent.addEventListener("click", (e) => {
    e.preventDefault();
    if (subMenus.contains(e.target)) return;
    const parentAnchor = [...sideBarParentAnchors].find((el) =>
      el.contains(e.target)
    );

    console.log(parentAnchor);

    const id = parentAnchor.dataset.id;
    const subMenu = [...allSubMenus].find((el) => el.dataset.parentId === id);
    subMenu.classList.remove("sub-menu__slide--left-to-right");
    subMenu.classList.add("sub-menu__slide--right-to-left");
  });

  // submenu 닫기
  [...allSubMenuBacks].forEach((subMenuBack) => {
    subMenuBack.addEventListener("click", (e) => {
      if (!subMenuBack.contains(e.target)) return;

      subMenuBack.parentElement.classList.remove(
        "sub-menu__slide--right-to-left"
      );

      subMenuBack.parentElement.classList.add("sub-menu__slide--left-to-right");
    });
  });
}

main();
