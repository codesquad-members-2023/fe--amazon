const sidebar1 = document.querySelector(".sidebar");
const menuAll = document.querySelector(".sidebar__menu-all");
const menuAllDetail = document.querySelector(".sidebar__all-menu_extend");

sidebar1.addEventListener("click", (e) => {
  if (e.target.className === "sidebar_menu_summary") {
    menuAllDetail.style.display = "none";
  }
});

menuAll.addEventListener("click", () => {
  if (!menuAllDetail.innerHTML) {
    TITLE_DETAIL.forEach((data) => {
      menuAllDetail.insertAdjacentHTML(
        "afterbegin",
        `<li><div>${data}</div><img src="asset/chevron-right.svg"></li>`
      );
    });
    menuAllDetail.insertAdjacentHTML(
      "beforeend",
      `<li class="sidebar_menu_summary"><div>간단히 보기<img src="asset/chevron-top.svg"></div></li>`
    );
  } else {
    menuAllDetail.style.display = "";
  }
});
