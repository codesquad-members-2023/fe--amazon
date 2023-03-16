import { ALL_SELECTORS } from "../allQuery.js";

const dimmedSidebar = () => {
  ALL_SELECTORS.dimmed.style.display = "block";
  ALL_SELECTORS.dimmed.style.zIndex = 1;
};

const clearDimmedSidebar = () => {
  ALL_SELECTORS.dimmed.style.display = "none";
  ALL_SELECTORS.dimmed.style.zIndex = 0;
};

const dimmedSidebarEvent = () => {
  ALL_SELECTORS.sidebarAll.addEventListener("click", dimmedSidebar);
  ALL_SELECTORS.sidebarClose.addEventListener("click", clearDimmedSidebar);
};

dimmedSidebarEvent();
