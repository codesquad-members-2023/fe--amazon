const homeSide = document.querySelector(".homeSidebar");
const homeSideOpen = document.querySelector(".homeMenu__all");
const homeSideClose = document.querySelector(".homeSidebar__closeBtn");

const dimmDivIndex5 = document.querySelector(".dimmed--zIndex5");

const openSide = () => {
  homeSide.style.display = "flex";
  dimmDivIndex5.classList.remove("hidden");
};

const hiddenSide = () => {
  homeSide.style.display = "none";
  dimmDivIndex5.classList.add("hidden");
};

homeSideOpen.addEventListener("click", openSide);
homeSideClose.addEventListener("click", hiddenSide);
