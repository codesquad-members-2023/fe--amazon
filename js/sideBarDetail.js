const detailSideBar = document.querySelector(".homeSidebar__detail");
const backButton = document.querySelector(".homeSidebar__mode--back");

const selectListInDetail = (event) => {
  console.log(event.target);
  if (backButton.contains(event.target)) {
    detailSideBar.classList.add("hideDetail");
  }
};

detailSideBar.addEventListener("click", selectListInDetail);

const sideBar = document.querySelector(".homeSidebar");
const sideBarList = document.querySelector(".homeSidebar__subTitle");

const aaa = sideBarList.innerText;

// const sideBarListArray = [...sideBarList];

// console.log(sideBarListArray);

const selectListInSidebar = (event) => {
  const title = event.target.innerText;
  console.log(title);
  if (SIDEBAR_DETAIL[title]) {
    detailSideBar.classList.remove("hideDetail");
  }
};

sideBar.addEventListener("click", selectListInSidebar);
