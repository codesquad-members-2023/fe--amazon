import {NAV,COMMON} from"../all/allQuery.js"

const clearDimmedNav = () =>COMMON.DIM.classList.add("hidden");
const dimmedNav = () => COMMON.DIM.classList.remove("hidden");
const dimmedNavEvent = () => {
  NAV.LOGINMENU.addEventListener("mouseout", clearDimmedNav);
  NAV.SHIPPINGMENU.addEventListener("mouseout", clearDimmedNav);
  NAV.LOGINMENU.addEventListener("mouseover", dimmedNav);
  NAV.SHIPPINGMENU.addEventListener("mouseover", dimmedNav);
};

dimmedNavEvent();
