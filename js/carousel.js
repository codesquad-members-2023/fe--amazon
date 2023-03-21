class Carousel {
  constructor() {
    this.leftButton = document.querySelector('.carousel_left');
    this.rightButton = document.querySelector('.carousel_right');
    this.carouselWindow = document.querySelector('.carousel_window');
    this.IMG_COUNT = 5; // 배경 이미지 개수만 변경하면 됨.
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

    const imgSrcArr = Array.from(
      { length: this.IMG_COUNT },
      (_, i) => `../../asset/main_image${i + 1}.jpg`,
    );

    imgSrcArr.map((imgSrc) => {
      container.appendChild(this.createCellHTML(imgSrc));
    });
  }

  createCellHTML(imgSrc) {
    let cellHTML = document.createElement('div');
    cellHTML.setAttribute('class', 'carousel_img');
    cellHTML.style.backgroundImage = `url(${imgSrc})`;
    return cellHTML;
  }

  leftBtnClickEvent() {}
  rightBtnClickEvent() {}
}

const carousel = new Carousel();
carousel.init();
console.log(carousel.leftButton);
