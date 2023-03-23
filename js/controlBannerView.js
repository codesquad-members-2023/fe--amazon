const bannerTrack = document.querySelector(".banner__track");
const bannerList = document.querySelectorAll(".banner__column");
const leftBtn = document.querySelector(".banner__btn:first-child");
const rightBtn = document.querySelector(".banner__btn:last-child");

(function addEvent() {
  leftBtn.addEventListener("click", translateTrack.bind(this, 1));
  rightBtn.addEventListener("click", translateTrack.bind(this, -1));
})();

function translateTrack(direction) {
  const selectedBtn = direction === 1 ? "left" : "right";
  // bannerTrack.style.transitionDuration = "500ms";
  bannerTrack.style.transition = "all 1s ease-in-out";
  bannerTrack.style.transform = `translateX(${direction * (100 / 6)}%)`;
  bannerTrack.ontransitionend = (e) => {
    reorgannizeEl(selectedBtn);
  };
}

function reorgannizeEl(selectedBtn) {
  bannerTrack.removeAttribute("style");
  selectedBtn === "left"
    ? bannerTrack.insertBefore(
        bannerTrack.lastElementChild,
        bannerTrack.firstElementChild
      )
    : bannerTrack.appendChild(bannerTrack.firstElementChild);
}

// let currentBanner = 0;

// const moveBannerTrack = (direction) => {
//   if (direction === "left") {
//     currentBanner++;
//     if (currentBanner >= bannerList.length) {
//       currentBanner = 0;
//     }
//   } else if (direction === "right") {
//     currentBanner--;
//     if (currentBanner < 0) {
//       currentBanner = bannerList.length - 1;
//     }
//   }
//   bannerTrack.style.transform = `translateX(-${
//     (currentBanner * 100) / bannerList.length
//   }%)`;
// };

// leftBtn.addEventListener("click", () => {
//   moveBannerTrack("left");
// });
// rightBtn.addEventListener("click", () => {
//   moveBannerTrack("right");
// });
