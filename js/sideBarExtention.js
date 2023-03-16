const sideBarExtendInit = () => {
  const DOWN_LIST = [
    "자동차 용품",
    "유아",
    "뷰티 및 퍼스널 케어",
    "여성 패션",
    "남성 패션",
    "여아용 의류",
    "남아용 의류",
    "건강 및 가정용품",
    "가정 및 주방",
    "산업용 및 과학용",
    "여행 가방",
    "영화 및 TV",
  ];

  const appendExtentionList = () => {
    let count = 8;
    DOWN_LIST.forEach((item) => {
      const ul = document.querySelector(".hideLists");
      const li = document.createElement("li");
      const icon = document.createElement("i");
      const closeMore = document.querySelector(".homeSidebar__mode--close");
      li.innerText = item;
      li.classList.add("homeSidebar__subTitle", "hoverIcon");
      li.dataset.columns = count;
      count++;
      icon.classList.add("fa-solid", "fa-chevron-right");
      ul.insertBefore(li, closeMore);
      li.appendChild(icon);
    });
  };

  const homeSidePlus = document.querySelector(".hideLists");
  const homeSideExtOpen = document.querySelector(".homeSidebar__mode--open");
  const homeSideExtClose = document.querySelector(".homeSidebar__mode--close");

  const loginUiLazyTime = 500;

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
    }, loginUiLazyTime);
  };

  homeSideExtOpen.addEventListener("click", openSideMore);
  homeSideExtClose.addEventListener("click", closeSideMore);

  appendExtentionList();
};

sideBarExtendInit();
