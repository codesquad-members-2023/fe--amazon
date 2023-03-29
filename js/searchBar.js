const showSearchBar = () => {
  const homeHeaderSearch = document.querySelector(".homeHeader__search");
  const headerFlyout = document.querySelector("#header-flyout");
  const dimmForHeader = document.querySelector(".dimm--header");

  const showHeaderFlyout = () => {
    headerFlyout.classList.remove("hide-opacity");
    headerFlyout.classList.add("show-opacity");
    dimmForHeader.classList.remove("hidden");
  };

  const hideHeaderFlyput = () => {
    headerFlyout.classList.add("hide-opacity");
    headerFlyout.classList.remove("show-opacity");
    dimmForHeader.classList.add("hidden");
  };

  homeHeaderSearch.addEventListener("click", showHeaderFlyout);
  dimmForHeader.addEventListener("click", hideHeaderFlyput);
};

showSearchBar();
