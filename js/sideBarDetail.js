const detailSideBar = document.querySelector(".homeSidebar__detail");
const backButton = document.querySelector(".homeSidebar__mode--back");

const selecteList = (event) => {
  console.log(event.target);
  if (event.target === backButton) {
    detailSideBar.classList.remove("hideDetail");
  }
};

detailSideBar.addEventListener("click", selecteList);
