const closeSidebarDetail = () => {
  const sidebar = document.querySelector(".homeSidebar");
  const sidebarlists = document.querySelector(".homeSidebar__lists");

  const selectListInSidebarDeail = (event) => {
    const thisElement = event.target.closest("ul");
    const liEventTarget = event.target.closest("li");

    if (!liEventTarget) return;

    if (liEventTarget !== null) {
      const backButtons = document.querySelectorAll(".homeSidebar__mode--back");
      const clickedButton = [...backButtons].find((button) => {
        return button.contains(event.target);
      });

      if (
        clickedButton &&
        liEventTarget.className === clickedButton.className
      ) {
        sidebarlists.classList.add("hideSidebarDetailAnimation");
        sidebarlists.classList.remove("none");
        thisElement.classList.remove(
          "show",
          "showSidebarDetailAnimation",
          "hideSidebarDetailAnimation"
        );
      }
    }
  };

  sidebar.addEventListener("click", selectListInSidebarDeail);
};
closeSidebarDetail();
