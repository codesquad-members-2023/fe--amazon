const bannerTrack = document.querySelector(".banner__track");
const bannerList = document.querySelectorAll(".banner__column");
const leftBtn = document.querySelector(".banner__btn:first-child");
const rightBtn = document.querySelector(".banner__btn:last-child");

let directionByNumber = 0;

const moveBannerTrack = (direction) => {
  if (direction === "left") {
    directionByNumber = 1;
  } else if (direction === "right") {
    directionByNumber = -1;
  }
  bannerTrack.style.transition = "transform .5s ease-in-out";
  bannerTrack.style.transform = `translateX(${
    (directionByNumber * 100) / bannerList.length
  }%)`;
  bannerTrack.ontransitionend = () => {
    reorgannizeEl(direction);
  };
};

function reorgannizeEl(direction) {
  bannerTrack.removeAttribute("style");
  direction === "left"
    ? bannerTrack.insertBefore(
        bannerTrack.lastElementChild,
        bannerTrack.firstElementChild
      )
    : bannerTrack.appendChild(bannerTrack.firstElementChild);
}

leftBtn.addEventListener("click", function () {
  moveBannerTrack("left");
});
rightBtn.addEventListener("click", function () {
  moveBannerTrack("right");
});
