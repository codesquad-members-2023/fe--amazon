const loginMenu = document.querySelector(".nav__login_popup-box");
const shippingMenu = document.querySelector(".nav__shipping");
const dimmed = document.querySelector(".dim-layer");
const subbarAll = document.querySelector(".sub__all-menu");
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".sidebar__btn_close");
const loginPopupBox = document.querySelector(".nav__login_popup");

loginMenu.addEventListener("mouseover", () => {
  dimmed.style.display = "block";
});

loginMenu.addEventListener("mouseout", () => {
  dimmed.style.display = "none";
});

shippingMenu.addEventListener("mouseover", () => {
  dimmed.style.display = "block";
});

shippingMenu.addEventListener("mouseout", () => {
  dimmed.style.display = "none";
});

subbarAll.addEventListener("click", () => {
  sidebar.style.display = "block";
  dimmed.style.display = "block";
  dimmed.style.zIndex = 1;
  loginMenu.style.display = "";
  loginPopupBox.style.animation = 0;
});

sidebarClose.addEventListener("click", () => {
  sidebar.style.display = "none";
  dimmed.style.display = "none";
  dimmed.style.zIndex = 0;
});
