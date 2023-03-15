const sideBarExtend = () => {
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

  const addList = () => {
    let count = 5;
    DOWN_LIST.forEach((item) => {
      const ul = document.querySelector(".hideLists");
      const li = document.createElement("li");
      const icon = document.createElement("i");
      const closeMore = document.querySelector(".homeSidebar__mode--close");
      li.innerText = item;
      li.classList.add("homeSidebar__subTitle", "hoverIcon");
      // data-columns 부여
      // li.setAttribute("data-columns", `2-${count}`);
      li.dataset.columns = `2-${count}`;
      count++;
      icon.classList.add("fa-solid", "fa-chevron-right");
      ul.insertBefore(li, closeMore);
      li.appendChild(icon);
    });
  };

  const homeSidePlus = document.querySelector(".hideLists");
  const homeSideSeeAll = document.querySelector(".homeSidebar__mode--open");
  const homeSideCloseAll = document.querySelector(".homeSidebar__mode--close");

  const SET_TIME_OUT_500 = 500;

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
    }, SET_TIME_OUT_500);
  };

  homeSideSeeAll.addEventListener("click", openSideMore);
  homeSideCloseAll.addEventListener("click", closeSideMore);

  addList();
};

sideBarExtend();
