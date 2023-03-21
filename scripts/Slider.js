export default class Slider {
  constructor() {
    this.allSliderItems = document.querySelectorAll(".slider__item");
    this.buttonLeft = document.querySelector(".slider-button--left");
    this.buttonRight = document.querySelector(".slider-button--right");
    this.container = document.querySelector(".slider__container");
    this.direction;
  }

  handleRigthBtnClick() {
    this.direction = -1;
    this.container.style.transitionDuration = "250ms";
    this.container.style.transform = `translateX(${
      -100 / this.allSliderItems.length
    }%)`;
  }

  handleLeftBtnClick() {
    this.direction = 1;
    this.container.style.transitionDuration = "250ms";
    this.container.style.transform = `translateX(${
      100 / this.allSliderItems.length
    }%)`;
  }

  handleTransitionEnd() {
    this.container.removeAttribute("style");
    this.direction === 1
      ? this.container.insertBefore(
          this.container.lastElementChild,
          this.container.firstElementChild
        )
      : this.container.insertBefore(this.container.firstElementChild, null);
  }

  onSlider() {
    this.buttonLeft.addEventListener("click", () => {
      this.handleLeftBtnClick();
    });
    this.buttonRight.addEventListener("click", () => {
      this.handleRigthBtnClick();
    });
    this.container.addEventListener("transitionend", () => {
      this.handleTransitionEnd();
    });
  }
}
