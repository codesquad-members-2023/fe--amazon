const sectionViewInit = () => {
  const headerLogin = document.querySelector(".homeHeader__login");
  const headerLocation = document.querySelector(".homeHeader__location");

  const loginSection = document.querySelector(".section__login");
  const loginSectionDetail = document.querySelector(".section__login2");

  const dimmForHeader = document.querySelector(".dimm--header");

  const loginUILazyTime = 1000;

  setTimeout(function () {
    loginSection.classList.add("visible");
    loginSection.classList.remove("hidden");
  }, loginUILazyTime);

  const removeLoginSection = () => {
    loginSection.classList.remove("visible");
    loginSection.classList.add("hidden");
  };

  const showLoginSectionDetail = () => {
    loginSectionDetail.style.display = "flex";
    dimmForHeader.classList.remove("hidden");
  };

  const hiddenLoginSectionDetail = () => {
    loginSectionDetail.style.display = "none";
    dimmForHeader.classList.add("hidden");
  };

  // 최초 1회 보이는 로그인 센션 제거
  headerLogin.addEventListener("mouseout", removeLoginSection);

  // 로그인 호버 이벤트 리스트
  headerLogin.addEventListener("mouseover", showLoginSectionDetail);
  headerLogin.addEventListener("mouseout", hiddenLoginSectionDetail);
  loginSectionDetail.addEventListener("mouseover", showLoginSectionDetail);
  loginSectionDetail.addEventListener("mouseout", hiddenLoginSectionDetail);

  const showLocationSectionDetail = () => {
    dimmForHeader.classList.remove("hidden");
  };

  const hiddenLocationSectionDetail = () => {
    dimmForHeader.classList.add("hidden");
  };

  // 로케이선 호버 이벤트 리스트
  headerLocation.addEventListener("mouseover", showLocationSectionDetail);
  headerLocation.addEventListener("mouseout", hiddenLocationSectionDetail);
};

sectionViewInit();
