const closeSidebarDetail = () => {
  const sidebar = document.querySelector(".homeSidebar");
  const sidebarlist = document.querySelector(".homeSidebar__lists");

  const selectListInSidebarDeail = (event) => {
    const thisElement = event.target.closest("ul");
    const liEventTarget = event.target.closest("li");

    if (liEventTarget) {
      const backButtons = document.querySelectorAll(".homeSidebar__mode--back");
      const seltedBtn = [...backButtons].find((button) => {
        return button.contains(event.target);
      });

      if (seltedBtn && liEventTarget.className === seltedBtn.className) {
        thisElement.classList.add("hideSidebarDeatilSoft");
        thisElement.classList.remove(
          "showDetail",
          "showSidebarDetailAnimation"
        );
        sidebarlist.classList.remove("none");
      }
    } else return;
  };
  sidebar.addEventListener("click", selectListInSidebarDeail);
};

closeSidebarDetail();
