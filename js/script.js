setTimeout(() => {
  const el = document.querySelector(".login-modal");
  el.classList.add("visible");
}, 1000);

const sidebarButton = document.querySelector(".nav-sidebar-button");
const sidebar = document.querySelector(".sidebar");

sidebarButton.addEventListener("click", () => {
  sidebar.style.left = "0";
  closeButton.style.opacity = "100%";
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
});

// 로그인 호버, 딤처리
const dimmed = document.querySelector(".dimmed");
const loginMenu = document.querySelector(".login-menu");
const loginHover = document.querySelector(".login-hover");
const loginModal = document.querySelector(".login-modal");

loginMenu.addEventListener("mouseover", () => {
  loginHover.style.display = "block";
  dimmed.style.display = "block";
});

loginMenu.addEventListener("mouseout", () => {
  loginHover.style.display = "none";
  loginModal.style.display = "none";
  dimmed.style.display = "none";
});
