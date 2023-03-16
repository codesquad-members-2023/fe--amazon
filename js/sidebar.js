function viewSidebar() {
  //사이드바 펼치기
  const sidebarShowButton = document.querySelector(".nav-sidebar-button");
  const sidebar = document.querySelector(".sidebar");
  const closeButton = document.querySelector(".sidebar-close-button");
  const dimmed = document.querySelector(".dimmed");
  const loginModal = document.querySelector(".login-modal");

  sidebarShowButton.addEventListener("click", () => {
    sidebar.style.left = "0";
    closeButton.style.opacity = "100%";
    dimmed.style.display = "block";
    loginModal.style.display = "none";
  });
}

function hideSidebar() {
  // 사이드바 감추기
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

  sidebarView.addEventListener("click", () => {
    sidebarOtherContents.style.height = "100%";
  });
}

function closeCategoryMenu() {
  const sidebarQuickView = document.querySelector(".quick-view");
  const sidebarOtherContents = document.querySelector(".sidebar-other-contents");
  
  sidebarQuickView.addEventListener("click", () => {
    sidebarOtherContents.style.height = "0";
  });
}

viewSidebar()
hideSidebar()
openCategoryMenu()
closeCategoryMenu()