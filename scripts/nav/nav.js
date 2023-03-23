import { NAV, COMMON } from "../all/allQuery.js";

const clearDimmedNav = () => COMMON.DIM.classList.add("hidden");
const dimmedNav = () => {
  COMMON.DIM.classList.remove("hidden");
  COMMON.DIM.classList.add("nav_index");
};
const clearLoginExtend = () => NAV.LOGINEXTENSION.classList.add("visible_hidden");
const clearShippingPopup = () => NAV.SHIPPINGPOPUP.classList.add("hidden");
const showLoginExtend = () => NAV.LOGINEXTENSION.classList.remove("visible_hidden");
const showShippingPopup = () => NAV.SHIPPINGPOPUP.classList.remove("hidden");
const navEventListener = () => {
  NAV.LOGINMENU.addEventListener("mouseout", clearDimmedNav);
  NAV.SHIPPINGMENU.addEventListener("mouseout", clearDimmedNav);
  NAV.LOGINMENU.addEventListener("mouseover", dimmedNav);
  NAV.SHIPPINGMENU.addEventListener("mouseover", dimmedNav);
  NAV.LOGINMENU.addEventListener("mouseout", clearLoginExtend);
  NAV.SHIPPINGMENU.addEventListener("mouseout", clearShippingPopup);
  NAV.LOGINMENU.addEventListener("mouseover", showLoginExtend);
  NAV.SHIPPINGMENU.addEventListener("mouseover", showShippingPopup);
};

navEventListener();

//단순화시킬 필요성이 있음
