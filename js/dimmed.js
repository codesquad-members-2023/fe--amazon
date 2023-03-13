const loginMenu = document.querySelector(".nav__login_popup-box");
const shippingMenu = document.querySelector(".nav__shipping");
const dimmed = document.querySelector(".dim-layer");

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
