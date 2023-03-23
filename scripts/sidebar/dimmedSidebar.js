import { COMMON, SIDEBAR, SUBMENU } from "../all/allQuery.js";

const dimmedSidebar = () => {
  COMMON.DIM.classList.remove("hidden");
  COMMON.DIM.classList.add("sidebar_index");
};
const clearDimmedSidebar = () => COMMON.DIM.classList.add("hidden");
const showSidebar = () => SIDEBAR.ALL.classList.remove("hidden");
const closeSidebar = () => SIDEBAR.ALL.classList.add("hidden");

const sidebarEventListener = () => {
  SUBMENU.ALLMENU.addEventListener("click", dimmedSidebar);
  SIDEBAR.CLOSEBUTTON.addEventListener("click", clearDimmedSidebar);
  SUBMENU.ALLMENU.addEventListener("click", showSidebar);
  SIDEBAR.CLOSEBUTTON.addEventListener("click", closeSidebar);
};

sidebarEventListener();
