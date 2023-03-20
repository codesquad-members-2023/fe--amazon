class Carousel {
  constructor() {
    this.leftButton = document.querySelector('.carousel_left');
    this.rightButton = document.querySelector('.carousel_right');
    this.carouselWindow = document.querySelector('.carousel_window');
    this.IMG_COUNT = 5;
  }
  init() {
    this.addBtnEvents();
    this.createCells();
  }

  addBtnEvents() {
    this.leftButton.addEventListener('click', this.leftBtnClickEvent());
    this.rightButton.addEventListener('click', this.rightBtnClickEvent());
  }
  createCells() {
    const container = this.carouselWindow.querySelector('.carousel_container');
    const imgArr = Array.from(
      { length: this.IMG_COUNT },
      (_, i) => `../asset/main_image${i + 1}`,
    );
    console.log(imgArr);
  }
  leftBtnClickEvent() {}
  rightBtnClickEvent() {}
}

const carousel = new Carousel();
carousel.init();
console.log(carousel.leftButton);
