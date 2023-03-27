import { COMMON, SIDEBAR, SUBMENU } from "../all/allQuery.js";

const dimmedSidebar = () => {
  COMMON.DIM.classList.add("show_opacity", "sidebar_index");
};
const clearDimmedSidebar = () => {
  COMMON.DIM.classList.remove("show_opacity", "sidebar_index");
};

const showSidebar = () => SIDEBAR.ALL.classList.add("show_display");
const closeSidebar = () => SIDEBAR.ALL.classList.remove("show_display");



const sidebarEventListener = () => {
  SUBMENU.ALLMENU.addEventListener("click", () => {
    dimmedSidebar();
    showSidebar();
  });
  SIDEBAR.CLOSEBUTTON.addEventListener("click", () => {
    clearDimmedSidebar();
    closeSidebar();
  });
};

sidebarEventListener();
