import { $ } from "../utils.js";

class Carousel {
  constructor() {
    this.prevButton = $(".prev-button");
    this.nextButton = $(".next-button");
    this.slideList = $(".slide-list");
    this.content = $(".slide-item");
  }

  init() {
    this.addEvent();
  }

  addEvent() {
    this.prevButton.addEventListener("click", this.translateContainer.bind(this, 1));
    this.nextButton.addEventListener("click", this.translateContainer.bind(this, -1));
  }

  translateContainer(direction) {
    const selectedButton = direction === 1 ? "prevButton" : "nextButton";
    this.slideList.style.transitionDuration = "500ms";
    this.slideList.style.transform = `translateX(${direction * 100}%)`;
    this.slideList.ontransitionend = () => this.reorganizeEl(selectedButton);
  }

  reorganizeEl(selectedButton) {
    this.slideList.removeAttribute("style");
    selectedButton === "prevButton" ? this.slideList.insertBefore(this.slideList.lastElementChild, this.slideList.firstElementChild) : this.slideList.appendChild(this.slideList.firstElementChild);
  }
}

export { Carousel };
