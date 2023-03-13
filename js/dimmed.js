const loginMenu = document.querySelector(".nav__login_popup-box");
const shippingMenu = document.querySelector(".nav__shipping");
const dimmed = document.querySelector(".dim-layer");
const subbarAll = document.querySelector(".sub__all-menu");
const sidebar = document.querySelector(".sidebar");

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
});
