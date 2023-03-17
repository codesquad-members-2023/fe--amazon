const openSidebarDetail = () => {
  const sideBar = document.querySelector(".homeSidebar");
  const sidebarLists = document.querySelector(".homeSidebar__lists");

  const selectListInSidebar = (event) => {
    const liEventTarget = event.target.closest("li");

    if (!liEventTarget) {
      return;
    }

    // 클릭된 li의 고유번호 data-columns를 찾는다.
    const columnNumber = liEventTarget.dataset.columns;
    const selector = `ul[data-columns="${columnNumber}"]`;
    const element = sideBar.querySelector(selector);

    const elementColumns = element.getAttribute("data-columns");

    // 숨겨진 ul중에서 클릭된 li의 columns과 같은 ul을 찾는다.
    if (columnNumber === elementColumns) {
      element.classList.remove("hideSidebarDetailAnimation");
      element.classList.add("showDetail", "showSidebarDetailAnimation");
      sidebarLists.classList.add("none");
    }
  };

  sidebarLists.addEventListener("click", selectListInSidebar);
};

openSidebarDetail();
