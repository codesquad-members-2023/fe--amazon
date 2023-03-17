import { ALL_SELECTORS } from "../allQuery.js";
import { TITLE_DETAIL } from "../../model/data.js";

const summarySidebar = () => {
  ALL_SELECTORS.sidebar.addEventListener("click", (e) => {
    if (e.target.className === "sidebar_menu_summary")
      ALL_SELECTORS.menuAllDetail.style.display = "none";
  });
};

const detailSidebar = () => {
  ALL_SELECTORS.menuAll.addEventListener("click", () => {
    if (!ALL_SELECTORS.menuAllDetail.innerHTML) {
      TITLE_DETAIL.forEach((data) => {
        ALL_SELECTORS.menuAllDetail.insertAdjacentHTML(
          "afterbegin",
          `<li><div>${data}</div><img src="assets/chevron-right.svg"></li>`
        );
      });
      ALL_SELECTORS.menuAllDetail.insertAdjacentHTML(
        "beforeend",
        `<li class="sidebar_menu_summary"><div>간단히 보기<img src="assets/chevron-top.svg"></div></li>`
      );
    } else {
      ALL_SELECTORS.menuAllDetail.style.display = "";
    }
  });
};

const sidebarEvent = () => {
  summarySidebar();
  detailSidebar();
};

sidebarEvent();
