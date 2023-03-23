const bannerTrack = document.querySelector(".banner__track");
const bannerList = document.querySelectorAll(".banner__column");
const leftBtn = document.querySelector(".banner__btn:first-child");
const rightBtn = document.querySelector(".banner__btn:last-child");

let currentBanner = 0;

const moveBannerTrack = (direction) => {
  console.log(direction);
  if (direction === "left") {
    currentBanner++;
    if (currentBanner >= bannerList.length) {
      currentBanner = 0;
    }
  } else if (direction === "right") {
    currentBanner--;
    if (currentBanner < 0) {
      currentBanner = bannerList.length - 1;
    }
  }
  bannerTrack.style.transform = `translateX(-${(currentBanner * 100) / 6}%)`;
};

leftBtn.addEventListener("click", () => {
  moveBannerTrack("left");
});
rightBtn.addEventListener("click", () => {
  moveBannerTrack("right");
});
