import {SIDEBAR,SUBMENU} from "../all/allQuery.js"

const showSidebar = () => SIDEBAR.ALL.classList.remove("hidden")
const closeSidebar = () => SIDEBAR.ALL.classList.add("hidden")
const sidebarController = () => {
  SUBMENU.ALLMENU.addEventListener("click", showSidebar);
  SIDEBAR.CLOSEBUTTON.addEventListener("click", closeSidebar);
};

sidebarController();
