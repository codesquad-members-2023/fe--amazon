setTimeout(() => {
  const el = document.querySelector(".login-modal");
  el.classList.add("visible");
}, 1000);

const sidebarButton = document.querySelector(".nav-sidebar-button");
const sidebar = document.querySelector(".sidebar");

sidebarButton.addEventListener("click", () => {
  sidebar.style.left = "0";
});

const sidebarView = document.querySelector(".view-all-contents");
const sidebarOtherContents = document.querySelector(".sidebar-other-contents");
const sidebarQuickView = document.querySelector(".quick-view");

sidebarView.addEventListener("click", () => {
  sidebarOtherContents.style.height = "100%";
});

sidebarQuickView.addEventListener("click", () => {
  sidebarOtherContents.style.height = "0";
});

const sidebarCloseButton = document.querySelector(".sidebar-close-button");

sidebarCloseButton.addEventListener("click", () => {
  sidebar.style.left = "-400px";
});
