const showSearchBar = () => {
  const homeHeaderSearch = document.querySelector(".homeHeader__search");
  const searchFlyout = document.querySelector("#search-flyout");
  const dimmForHeader = document.querySelector(".dimm--header");

  const showHeaderFlyout = () => {
    searchFlyout.classList.remove("hide-opacity");
    searchFlyout.classList.add("show-opacity");
    dimmForHeader.classList.remove("hidden");
  };

  const hideHeaderFlyput = () => {
    searchFlyout.classList.add("hide-opacity");
    searchFlyout.classList.remove("show-opacity");
    dimmForHeader.classList.add("hidden");
  };

  homeHeaderSearch.addEventListener("click", showHeaderFlyout);
  dimmForHeader.addEventListener("click", hideHeaderFlyput);
};

showSearchBar();
