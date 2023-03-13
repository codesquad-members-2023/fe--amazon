const loginMenu = document.querySelector(".nav__login_popup-box");
const dimmed = document.querySelector(".dim-layer");

loginMenu.addEventListener("mouseover", () => {
  dimmed.style.display = "block";
});

loginMenu.addEventListener("mouseout", () => {
  dimmed.style.display = "none";
});
