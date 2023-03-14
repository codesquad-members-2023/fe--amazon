setTimeout(() => {
  const el = document.querySelector(".login-modal");
  el.classList.add("visible");
}, 1000);

const sidebarView = document.querySelector(".view-all-contents");
const sidebarOtherContents = document.querySelector(".sidebar-other-contents");

sidebarView.addEventListener("click", (e) => {
  sidebarOtherContents.style.height = "100%";
});

sidebarView.addEventListener("dblclick", (e) => {
  sidebarOtherContents.style.height = "0%";
});
