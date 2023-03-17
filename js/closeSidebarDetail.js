const closeSidebarDetail = () => {
  const sidebar = document.querySelector(".homeSidebar");
  const sidebarlist = document.querySelector(".homeSidebar__lists");

  const selectListInSidebarDeail = (event) => {
    const backButtons = document.querySelectorAll(".homeSidebar__mode--back");
    const seltedBtn = [...backButtons].find((button) => {
      return button.contains(event.target);
    });

    const thisElement = event.target.closest("ul");

    const liEventTarget = event.target.closest("li");
    console.log(liEventTarget);

    if (liEventTarget.className === seltedBtn.className) {
      thisElement.classList.add("hideSidebarDeatilSoft");
      thisElement.classList.remove("showDetail", "showSidebarDetailAnimation");
      sidebarlist.classList.remove("none");
    }
  };

  sidebar.addEventListener("click", selectListInSidebarDeail);
};

closeSidebarDetail();
