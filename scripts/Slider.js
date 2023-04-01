import {
  AUTO_SLIDE_MILLI,
  SLIDE_TRANSITION_MILLI,
  LEFT,
  RIGHT,
} from "./constants";

export default class Slider {
  constructor() {
    this.allSliderItems = document.querySelectorAll(".slider__item");
    this.buttonLeft = document.querySelector(".slider-button--left");
    this.buttonRight = document.querySelector(".slider-button--right");
    this.container = document.querySelector(".slider__container");
    this.direction;
  }

  flipSlidesWithInterval(interval) {
    setInterval(() => {
      // this.buttonRight.dispatchEvent(new Event("click"));
      this.handleRigthBtnClick();
    }, interval);
  }

  handleRigthBtnClick() {
    this.direction = RIGHT;
    this.container.style.transitionDuration = `${SLIDE_TRANSITION_MILLI}ms`;
    this.container.style.transform = `translateX(${
      -100 / this.allSliderItems.length
    }%)`;
  }

  handleLeftBtnClick() {
    this.direction = LEFT;
    this.container.style.transitionDuration = `${SLIDE_TRANSITION_MILLI}ms`;
    this.container.style.transform = `translateX(${
      100 / this.allSliderItems.length
    }%)`;
  }

  handleTransitionEnd() {
    this.container.removeAttribute("style");
    this.direction === LEFT
      ? this.container.insertBefore(
          this.container.lastElementChild,
          this.container.firstElementChild
        )
      : this.container.insertBefore(this.container.firstElementChild, null);
  }

  onSlider() {
    this.flipSlidesWithInterval(AUTO_SLIDE_MILLI);

    this.buttonLeft.addEventListener("click", () => this.handleLeftBtnClick());
    this.buttonRight.addEventListener("click", () =>
      this.handleRigthBtnClick()
    );
    this.container.addEventListener("transitionend", () =>
      this.handleTransitionEnd()
    );
  }
}
