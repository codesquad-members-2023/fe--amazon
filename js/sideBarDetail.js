/* 세부페이지 레이아웃 */
const detailSideBar = document.querySelector(".homeSidebar__detail");
const backButton = document.querySelector(".homeSidebar__mode--back");

// backButton 클릭시 세부페이지 닫기
const selectListInDetail = (event) => {
  if (backButton.contains(event.target)) {
    detailSideBar.classList.add("hideDetail");
  }
};

// 세부페이지 전체에 "클릭" 이벤트 부여
detailSideBar.addEventListener("click", selectListInDetail);

/* --------------------------------------------------------------------*/

/* 세부페이지 오픈 전 사이드바 레이아웃 */
const sideBar = document.querySelector(".homeSidebar");

// subTitle(li 전체) 변수
const sideBarList = document.querySelector(".homeSidebar__subTitle");

const selectListInSidebar = (event) => {
  // 이벤트 타겟이 근처 li를 찾게 한다.
  const targetSubtitle = event.target.closest("li");
  // 클릭된 li의 고유번호 data-columns를 찾는다.
  let columnNumer = targetSubtitle.dataset.columns;
  // 클릭된 li의 고유번호 data-columns과 일치하는 DATA key값을 찾는다.
  if (SIDEBAR_DETAIL[columnNumer]) {
    // 일치하는 key값을 가진 내용의 세부페이지를 보여준다.
    detailSideBar.classList.remove("hideDetail");
  }
};

// 사이드바 전체에 "클릭" 이벤트 부여 (사이드바 요소 전체에 이벤트 위임)
sideBar.addEventListener("click", selectListInSidebar);
