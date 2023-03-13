const sidebarViewInit = () => {
  const homeSide = document.querySelector(".homeSidebar");
  const homeSideOpen = document.querySelector(".homeMenu__all");
  const homeSideClose = document.querySelector(".homeSidebar__closeBtn");
  const dimmDivIndex5 = document.querySelector(".dimmed--zIndex5");

  const openSide = () => {
    homeSide.style.display = "flex";
    homeSide.classList.remove("hideAnimation");
    homeSide.classList.add("showAnimation");
    dimmDivIndex5.classList.remove("hidden");
  };

  const hiddenSide = () => {
    homeSide.classList.remove("showAnimation");
    homeSide.classList.add("hideAnimation");
    dimmDivIndex5.classList.add("hidden");
  };

  const toDisplayNone = (e) => {
    if (e.animationName === "hideSidebarSoft") {
      homeSide.style.display = "none";
    }
  };

  homeSideOpen.addEventListener("click", openSide);
  homeSideClose.addEventListener("click", hiddenSide);
  homeSide.addEventListener("animationend", toDisplayNone);

  const homeSidePlus = document.querySelector(".hideLists");
  const homeSideSeeAll = document.querySelector(".homeSidebar__mode--open");
  const homeSideCloseAll = document.querySelector(".homeSidebar__mode--close");

  const openSideMore = () => {
    homeSidePlus.style.display = "block";
    homeSidePlus.classList.remove("closeAnimation");
    homeSidePlus.classList.add("openAnimation");
  };

  const closeSideMore = () => {
    homeSidePlus.classList.remove("openAnimation");
    homeSidePlus.classList.add("closeAnimation");
    setTimeout(() => {
      homeSidePlus.style.display = "none";
    }, 500);
  };

  homeSideSeeAll.addEventListener("click", openSideMore);
  homeSideCloseAll.addEventListener("click", closeSideMore);
};

sidebarViewInit();
