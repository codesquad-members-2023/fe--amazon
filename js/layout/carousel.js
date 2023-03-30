import { $ } from "../utils.js";

class Carousel {
  constructor() {
    this.leftButton = $(".left-button");
    this.rightButton = $(".right-button");
    this.slideList = $(".slide__list");
    this.curIndex = 0;
  }

  init() {
    this.moveSlideList();
  }

  moveSlideList() {
    this.leftButton.addEventListener("click", () => {
      this.slideList.style.transform = "translateX(-100%)";
    });

    this.rightButton.addEventListener("click", () => {
      this.slideList.style.transform = "translateX(100%)";
    });
  }
}

export { Carousel };
