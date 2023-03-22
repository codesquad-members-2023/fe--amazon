import { SIDEBAR} from "../all/allQuery.js";
import { TITLE_DETAIL } from "../model/data.js"

const summarySidebar = () => {
  SIDEBAR.ALL.addEventListener("click", (e) => {
    if (e.target.className === "sidebar_menu_summary")
      SIDEBAR.MENUDETAIL.style.display="none";
  });
};

const detailSidebar = () => {
  SIDEBAR.MENUALLBUTTON.addEventListener("click", () => {
    if (!SIDEBAR.MENUDETAIL.innerHTML) {
      TITLE_DETAIL.forEach((data) => {
        SIDEBAR.MENUDETAIL.insertAdjacentHTML(
          "afterbegin",
          `<li><div>${data}</div><img src="assets/chevron-right.svg"></li>`
        );
      });
      SIDEBAR.MENUDETAIL.insertAdjacentHTML(
        "beforeend",
        `<li class="sidebar_menu_summary"><div>간단히 보기<img src="assets/chevron-top.svg"></div></li>`
      );
    } else {
      SIDEBAR.MENUDETAIL.style.display = "";
    }
  });
};

const sidebarEvent = () => {
  summarySidebar();
  detailSidebar();
};

sidebarEvent();
