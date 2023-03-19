const closeSidebarDetail = () => {
  const sidebar = document.querySelector(".homeSidebar");
  const sidebarlists = document.querySelector(".homeSidebar__lists");

  const selectListInSidebarDeail = (event) => {
    const thisElement = event.target.closest("ul");
    const liEventTarget = event.target.closest("li");

    if (liEventTarget) {
      const backButtons = document.querySelectorAll(".homeSidebar__mode--back");
      const selected = [...backButtons].find((button) => {
        return button.contains(event.target);
      });

      if (selected && liEventTarget.className === selected.className) {
        sidebarlists.classList.add("hideSidebarDetailAnimation");
        sidebarlists.classList.remove("none");
        thisElement.classList.remove("show", "showSidebarDetailAnimation");
        thisElement.classList.remove("hideSidebarDetailAnimation");
      }
    }
  };

  sidebar.addEventListener("click", selectListInSidebarDeail);
};
closeSidebarDetail();
