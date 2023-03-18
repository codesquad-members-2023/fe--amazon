const closeSidebarDetail = () => {
  const sidebar = document.querySelector(".homeSidebar");
  const sidebarlists = document.querySelector(".homeSidebar__lists");

  const selectListInSidebarDeail = (event) => {
    const thisElement = event.target.closest("ul");
    const liEventTarget = event.target.closest("li");

    if (liEventTarget) {
      const backButtons = document.querySelectorAll(".homeSidebar__mode--back");
      const seltedBtn = [...backButtons].find((button) => {
        return button.contains(event.target);
      });

      if (seltedBtn && liEventTarget.className === seltedBtn.className) {
        thisElement.classList.add("hideSidebarDetailAnimation");
        thisElement.classList.remove(
          "showDetail",
          "showSidebarDetailAnimation"
        );
        setTimeout(() => {
          thisElement.classList.remove("hideSidebarDetailAnimation");
          sidebarlists.classList.remove("none");
        }, 500); // 500ms = 0.5s (애니메이션 지속 시간과 동일한 값으로 설정)
      } else return;
    }
  };

  sidebar.addEventListener("click", selectListInSidebarDeail);
};

closeSidebarDetail();
