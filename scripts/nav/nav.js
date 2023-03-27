import { NAV, COMMON } from "../all/allQuery.js";

//dimm처리
const closeDimmedNav = () => COMMON.DIM.classList.remove("show_opacity");
const dimmedNav = () => {
  COMMON.DIM.classList.add("show_opacity");
  COMMON.DIM.classList.add("nav_index");
};

//login 1초 뒤에 확장 뜨기
const showLoginPopup = () => setTimeout(() => NAV.LOGIN_POPUP.classList.add("visible"), 1000);
const closeLoginPopup = () => NAV.LOGIN_POPUP.classList.remove("visible");
// Login 확장레이어 표시 및 삭제
const closeLoginExtend = () => NAV.LOGINEXTENSION.classList.remove("visible");
const showLoginExtend = () => NAV.LOGINEXTENSION.classList.add("visible");
//배송처 팝업 창 표시 및 삭제
const closeShippingPopup = () => NAV.SHIPPINGPOPUP.classList.remove("visible");
const showShippingPopup = () => NAV.SHIPPINGPOPUP.classList.add("visible");

const navEventListener = () => {
  showLoginPopup();

  NAV.LOGINMENU.addEventListener("mouseout", () => {
    closeDimmedNav();
    closeLoginExtend();
  });

  NAV.LOGINMENU.addEventListener("mouseover", () => {
    dimmedNav();
    showLoginExtend();
    closeLoginPopup();
  });

  NAV.SHIPPINGMENU.addEventListener("mouseout", () => {
    closeDimmedNav();
    closeShippingPopup();
  });

  NAV.SHIPPINGMENU.addEventListener("mouseover", () => {
    dimmedNav();
    showShippingPopup();
  });
};

navEventListener();

//단순화시킬 필요성이 있음
