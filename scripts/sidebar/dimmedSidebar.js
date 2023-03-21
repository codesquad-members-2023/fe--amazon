import { COMMON, SIDEBAR ,SUBMENU} from "../all/allQuery.js";

const dimmedSidebar = () => COMMON.DIM.classList.remove("hidden")

const clearDimmedSidebar = () => COMMON.DIM.classList.add("hidden")

const dimmedSidebarEvent = () => {
    SUBMENU.ALLMENU.addEventListener("click", dimmedSidebar);
    SIDEBAR.CLOSEBUTTON.addEventListener("click", clearDimmedSidebar);
};

dimmedSidebarEvent();
