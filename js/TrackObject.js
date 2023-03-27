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
  const trackWidthPercent = 100 / banners.imgList.length;
  this.element.style.transition = "transform .5s ease-in-out";
  this.element.style.transform = `translateX(${
    this.directionByNum * trackWidthPercent
  }%)`;
  this.element.ontransitionend = () => {
    this.reorgannizeEl(direction);
  };
};

Track.prototype.reorgannizeEl = function (direction) {
  this.element.removeAttribute("style");
  direction === "left"
    ? this.element.insertBefore(
        this.element.lastElementChild,
        this.element.firstElementChild
      )
    : this.element.appendChild(this.element.firstElementChild);
};

Track.prototype.addEvent = function () {
  this.leftBtn.addEventListener("click", this.moveTrack.bind(this, "left"));
  this.rightBtn.addEventListener("click", this.moveTrack.bind(this, "right"));
};
