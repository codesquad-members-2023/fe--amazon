// const bannerList = document.querySelectorAll(".banner__column");
// const leftBtn = document.querySelector(".banner__btn:first-child");
// const rightBtn = document.querySelector(".banner__btn:last-child");

function Track() {
  this.element = document.querySelector(".banner__track");
  this.leftBtn = document.querySelector(".banner__btn:first-child");
  this.rightBtn = document.querySelector(".banner__btn:last-child");
  this.directionByNum = 0;
}

Track.prototype.moveTrack = function (direction) {
  if (direction === "left") {
    this.directionByNum = 1;
  } else if (direction === "right") {
    this.directionByNum = -1;
  }
  this.element.style.transition = "transform .5s ease-in-out";
  this.element.style.transform = `translateX(${
    (this.directionByNum * 100) / banners.imgList.length
  }%)`;
  this.element.ontransitionend = () => {
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
