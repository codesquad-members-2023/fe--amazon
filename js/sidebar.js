function viewSidebar() {
  const sidebarShowButton = document.querySelector(".nav-sidebar-button");
  const sidebar = document.querySelector(".sidebar");
  const closeButton = document.querySelector(".sidebar-close-button");
  const dimmed = document.querySelector(".dimmed");
  const loginModal = document.querySelector(".login-modal");
  const sidebarOtherContents = document.querySelector(".sidebar-other-contents");
  const quickView = document.querySelector(".quick-view");


  sidebarShowButton.addEventListener("click", () => {
    sidebarHiddenItems.forEach((el) => sidebarOtherContents.insertAdjacentHTML("beforeend", `<li><div>${el}</div><img src="./assets/arrow.svg" /></li>`));
    quickView.insertAdjacentHTML("afterbegin", `<li><div>간단히 보기</div><img src="./assets/arrow.svg" /></li>`);
    sidebar.style.left = "0";
    closeButton.style.opacity = "100%";
    dimmed.style.display = "block";
    loginModal.style.display = "none";
  });
}

function hideSidebar() {
  const sidebarCloseButton = document.querySelector(".sidebar-close-button");
  const sidebar = document.querySelector(".sidebar");
  const dimmed = document.querySelector(".dimmed");

  sidebarCloseButton.addEventListener("click", () => {
    sidebar.style.left = "-400px";
    sidebarCloseButton.style.opacity = "0%";
    dimmed.style.display = "none";
  });
}

function openCategoryMenu() {
  const sidebarView = document.querySelector(".view-all-contents");
  const sidebarOtherContents = document.querySelector(".sidebar-other-contents");

  sidebarView.addEventListener("click", () => (sidebarOtherContents.style.height = "100%"));
}

function closeCategoryMenu() {
  const sidebarQuickView = document.querySelector(".quick-view");
  const sidebarOtherContents = document.querySelector(".sidebar-other-contents");

  sidebarQuickView.addEventListener("click", () => (sidebarOtherContents.style.height = "0"));
}

viewSidebar();
hideSidebar();
openCategoryMenu();
closeCategoryMenu();
