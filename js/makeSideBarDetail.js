const makeSideBarDetail = () => {
  const sideBar = document.querySelector(".homeSidebar");
  const DATA_KEYS_ARRAY = Object.keys(SIDEBAR_DETAIL);

  // 최초 모든 사이드바 디테일 ul 만들기
  DATA_KEYS_ARRAY.forEach((dataKey, index) => {
    const ul = document.createElement("ul");
    ul.classList.add("hideSidebar__lists--detail");
    ul.dataset.columns = index + 1;

    sideBar.appendChild(ul);

    const backButtonLi = document.createElement("li");
    const backButtonIcon = document.createElement("i");
    const backButtonSpan = document.createElement("span");

    backButtonLi.classList.add("homeSidebar__mode--back", "hoverIcon");
    backButtonIcon.classList.add("fa-solid", "fa-arrow-left");
    backButtonSpan.innerText = "주 메뉴";

    ul.appendChild(backButtonLi);
    backButtonLi.appendChild(backButtonIcon);
    backButtonLi.appendChild(backButtonSpan);

    const titleLi = document.createElement("li");
    titleLi.innerText = dataKey;
    titleLi.classList.add("homeSidebar__title");
    ul.appendChild(titleLi);

    SIDEBAR_DETAIL[dataKey].forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      li.classList.add("homeSidebar__subTitle");
      ul.appendChild(li);
    });
  });
};

makeSideBarDetail();
