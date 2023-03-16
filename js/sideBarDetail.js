// 전체 사이드바 변수
const sideBar = document.querySelector(".homeSidebar");
// 사이드바 기존 ul 변수
const sideBarUl = document.querySelector(".homeSidebar__lists");
// subTitle(li 전체) 변수
const sideBarList = document.querySelector(".homeSidebar__subTitle");
// 데이터 키값 배열
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

  // 이벤트 타겟이 근처 li를 찾게 한다.
  const eventTarget = event.target.closest("li");

  // eventTarget이 null인 경우 예외처리
  if (!eventTarget) {
    return;
  }

  // 클릭된 li의 고유번호 data-columns를 찾는다.
  const columnNumber = eventTarget.dataset.columns;
  // 숨겨진 디테일 ul 전체 리스트 배열
  const detailUlArray = sideBar.querySelectorAll(".himeSidebar__lists--detail");

  detailUlArray.forEach((ul) => {
    // 숨겨진 ul중에서 클릭된 li의 columns과 같은 ul을 찾는다.
    if (columnNumber === ul.dataset.columns) {
      ul.classList.add("showDetail");
      sideBarUl.classList.add("none");
    }

    // backButton 클릭 이벤트 발생시 오픈된 디테일 ul을 다시 숨긴다.
    if (backButton.className === eventTarget.className) {
      ul.classList.remove("showDetail");
      sideBarUl.classList.remove("none");
    }
  });
};

// 사이드바 전체에 "클릭" 이벤트 부여 (사이드바 요소 전체에 이벤트 위임)
sideBar.addEventListener("click", selectListInSidebar);
