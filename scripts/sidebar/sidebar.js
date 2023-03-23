import { COMMON, SIDEBAR, SUBMENU } from "../all/allQuery.js";

const dimmedSidebar = () => {
  COMMON.DIM.classList.add("show");
  COMMON.DIM.classList.add("sidebar_index");
};
const clearDimmedSidebar = () => COMMON.DIM.classList.remove("show");

const showSidebar = () => SIDEBAR.ALL.classList.add("show");
const closeSidebar = () => SIDEBAR.ALL.classList.remove("show");

const sidebarEventListener = () => {
  SUBMENU.ALLMENU.addEventListener("click", dimmedSidebar);
  SIDEBAR.CLOSEBUTTON.addEventListener("click", clearDimmedSidebar);
  SUBMENU.ALLMENU.addEventListener("click", showSidebar);
  SIDEBAR.CLOSEBUTTON.addEventListener("click", closeSidebar);
};

sidebarEventListener();
