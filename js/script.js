setTimeout(() => {
  const el = document.querySelector(".login-modal");
  el.classList.add("visible");
}, 1000);

const sidebarButton = document.querySelector(".nav-sidebar-button");
const sidebar = document.querySelector(".sidebar");
const dimmed = document.querySelector(".dimmed");
const loginModal = document.querySelector(".login-modal");

sidebarButton.addEventListener("click", () => {
  sidebar.style.left = "0";
  closeButton.style.opacity = "100%";
  dimmed.style.display = "block";
  loginModal.style.display = "none";
});

const sidebarView = document.querySelector(".view-all-contents");
const sidebarOtherContents = document.querySelector(".sidebar-other-contents");
const sidebarQuickView = document.querySelector(".quick-view");
const closeButton = document.querySelector(".sidebar-close-button");

sidebarView.addEventListener("click", () => {
  sidebarOtherContents.style.height = "100%";
});

sidebarQuickView.addEventListener("click", () => {
  sidebarOtherContents.style.height = "0";
});

const sidebarCloseButton = document.querySelector(".sidebar-close-button");

sidebarCloseButton.addEventListener("click", () => {
  sidebar.style.left = "-400px";
  closeButton.style.opacity = "0%";
  dimmed.style.display = "none";
});

// 로그인 호버, 딤처리

const loginMenu = document.querySelector(".login-menu");
const loginHover = document.querySelector(".login-hover");

loginMenu.addEventListener("mouseover", () => {
  loginHover.style.display = "block";
  dimmed.style.display = "block";
});

loginMenu.addEventListener("mouseout", () => {
  loginHover.style.display = "none";
  loginModal.style.display = "none";
  dimmed.style.display = "none";
});

const shippingHover = document.querySelector(".shipping-hover");
const shippingCountry = document.querySelector(".shipping-country");

shippingCountry.addEventListener("mouseover", () => {
  shippingHover.style.display = "block";
  dimmed.style.display = "block";
  loginModal.style.display = "none";
});

shippingCountry.addEventListener("mouseout", () => {
  shippingHover.style.display = "none";
  dimmed.style.display = "none";
});
