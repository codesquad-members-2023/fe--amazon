import { NAV } from "../all/allQuery.js";

const clearLoginExtend = () =>NAV.LOGINEXTENSION.classList.add("visible_hidden");
const clearShippingPopup = () => NAV.SHIPPINGPOPUP.classList.add("hidden");
const showLoginExtend = () => NAV.LOGINEXTENSION.classList.remove("visible_hidden");
const showShippingPopup = () => NAV.SHIPPINGPOPUP.classList.remove("hidden");
const showLoginExtendEvent = () => {
    NAV.LOGINMENU.addEventListener("mouseout", clearLoginExtend);
    NAV.SHIPPINGMENU.addEventListener("mouseout", clearShippingPopup);
    NAV.LOGINMENU.addEventListener("mouseover", showLoginExtend);
    NAV.SHIPPINGMENU.addEventListener("mouseover", showShippingPopup);
};

showLoginExtendEvent();