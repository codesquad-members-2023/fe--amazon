const sideBarDetailInit = () => {
  const sideBar = document.querySelector(".homeSidebar");
  const sideBarUl = document.querySelector(".homeSidebar__lists");
  const DATA_KEYS_ARRAY = Object.keys(SIDEBAR_DETAIL);

  /* --------------------------------------------------------------------*/

  // 최초 모든 사이드바 디테일 ul 만들기
  DATA_KEYS_ARRAY.forEach((dataKey, index) => {
    const ul = document.createElement("ul");
    ul.classList.add("himeSidebar__lists--detail");
    ul.dataset.columns = index + 1;

    const loginli = document.createElement("li");
    const loginIcon = document.createElement("i");
    const loginSpan = document.createElement("span");

    loginli.classList.add("homeSidebar__login");
    loginIcon.classList.add("fa-solid", "fa-circle-user");
    loginSpan.innerText = "안녕하세요, 로그인";
    ul.appendChild(loginli);
    loginli.appendChild(loginIcon);
    loginli.appendChild(loginSpan);

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

  /* --------------------------------------------------------------------*/

  // 클릭 이벤트로 사이드바 + 디테일 컨트롤
  const selectListInSidebar = (event) => {
    const backButton = document.querySelector(".homeSidebar__mode--back");
    const eventTarget = event.target.closest("li");

    if (!eventTarget) {
      return;
    }

    // 클릭된 li의 고유번호 data-columns를 찾는다.
    const columnNumber = eventTarget.dataset.columns;
    // 숨겨진 디테일 ul 전체 리스트 배열
    const detailUlArray = sideBar.querySelectorAll(
      ".himeSidebar__lists--detail"
    );

    detailUlArray.forEach((ul) => {
      // 숨겨진 ul중에서 클릭된 li의 columns과 같은 ul을 찾는다.
      if (columnNumber === ul.dataset.columns) {
        ul.classList.add("showDetail");
        sideBarUl.classList.add("none");
      }

      if (backButton.className === eventTarget.className) {
        ul.classList.remove("showDetail");
        sideBarUl.classList.remove("none");
      }
    });
  };

  sideBar.addEventListener("click", selectListInSidebar);
};
