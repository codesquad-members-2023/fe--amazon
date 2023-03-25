import { NAV, COMMON } from "../all/allQuery.js";

//dimm처리
const clearDimmedNav = () => COMMON.DIM.classList.remove("show");
const dimmedNav = () => {
  COMMON.DIM.classList.add("show");
  COMMON.DIM.classList.add("nav_index");
};

// Login 확장레이어 표시 및 삭제
const clearLoginExtend = () => NAV.LOGINEXTENSION.classList.remove("show");
const showLoginExtend = () => NAV.LOGINEXTENSION.classList.add("show");
//배송처 팝업 창 표시 및 삭제
const clearShippingPopup = () => NAV.SHIPPINGPOPUP.classList.remove("show");
const showShippingPopup = () => NAV.SHIPPINGPOPUP.classList.add("show");

const navEventListener = () => {
  NAV.LOGINMENU.addEventListener("mouseout", clearDimmedNav);
  NAV.LOGINMENU.addEventListener("mouseout", clearLoginExtend);

  NAV.LOGINMENU.addEventListener("mouseover", dimmedNav);
  NAV.LOGINMENU.addEventListener("mouseover", showLoginExtend);

  NAV.SHIPPINGMENU.addEventListener("mouseout", clearDimmedNav);
  NAV.SHIPPINGMENU.addEventListener("mouseout", clearShippingPopup);

  NAV.SHIPPINGMENU.addEventListener("mouseover", dimmedNav);
  NAV.SHIPPINGMENU.addEventListener("mouseover", showShippingPopup);
};

navEventListener();

//단순화시킬 필요성이 있음
