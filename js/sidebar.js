function sideBarActive() {
  const $viewSidebarButton = document.querySelector(".sidebar__button-view");
  const $sideBar = document.querySelector(".sidebar");
  const $closeSidebarButton = document.querySelector(".sidebar__button-close");

  viewSideBar($viewSidebarButton, $sideBar, $closeSidebarButton);
  closeSideBar($closeSidebarButton, $sideBar);
}

function viewSideBar(viewButton, sideBar, closeButton) {
  viewButton.addEventListener("click", () => {
    sideBar.classList.add("sidebar__active");
    closeButton.classList.add("button__close-view");
  });
}

function closeSideBar(closeButton, sideBar) {
  closeButton.addEventListener("click", () => {
    sideBar.classList.remove("sidebar__active");
    closeButton.classList.remove("button__close-view");
  });
}

sideBarActive();
