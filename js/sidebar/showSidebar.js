import { ALL_SELECTORS } from "../allQuery.js";

const showSidebar = () => {
  ALL_SELECTORS.sidebar.style.display = "block";
};
const closeSidebar = () => {
  ALL_SELECTORS.sidebar.style.display = "none";
};
const sidebarController = () => {
  ALL_SELECTORS.sidebarAll.addEventListener("click", showSidebar);
  ALL_SELECTORS.sidebarClose.addEventListener("click", closeSidebar);
};

sidebarController();
