const menuAllDetail = document.querySelector(".sidebar__all-menu_extend");
const menuAll = document.querySelector(".sidebar__menu-all");
const sidebar2 = document.querySelector(".sidebar");
sidebar2.addEventListener("click", (e) => {
  if (e.target.className === "sidebar_menu_summary") {
    menuAllDetail.style.display = "none";
  }
});
menuAll.addEventListener("click", () => {
  if (!menuAllDetail.innerHTML) {
    allMenuData.forEach((data) => {
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
