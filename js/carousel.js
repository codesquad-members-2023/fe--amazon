class Carousel {
  constructor() {
    this.leftButton = document.querySelector('.carousel_left');
    this.rightButton = document.querySelector('.carousel_right');
    this.carouselWindow = document.querySelector('.carousel_window');
    this.container = this.carouselWindow.querySelector('.carousel_container');
    this.IMG_COUNT = 5; // 배경 이미지 개수만 변경하면 됨.
  }

  init() {
    this.createCells();
    this.addBtnEvents();
  }

  addBtnEvents() {
    this.leftButton.addEventListener('click', () => {
      this.leftBtnClickEvent(0);
    });
    this.rightButton.addEventListener('click', () => {
      this.rightBtnClickEvent(1);
    });
  }

  createCells() {
    const imgSrcArr = Array.from(
      { length: this.IMG_COUNT },
      (_, i) => `../../asset/main_image${i + 1}.jpg`,
    );

    imgSrcArr.map((imgSrc) => {
      this.container.appendChild(this.createCellHTML(imgSrc));
    });
  }

  createCellHTML(imgSrc) {
    let cellHTML = document.createElement('div');
    cellHTML.setAttribute('class', 'carousel_img');
    cellHTML.style.backgroundImage = `url(${imgSrc})`;
    return cellHTML;
  }

  leftBtnClickEvent(direction) {
    this.container.style.transitionDuration = '500ms';
    this.container.style.transform = `translateX(${100 / this.IMG_COUNT}%)`;
    this.container.ontransitionend = () => {
      this.controlChildNodes(direction);
    };
  }
  rightBtnClickEvent(direction) {
    this.container.style.transitionDuration = '500ms';
    this.container.style.transform = `translateX(${
      (100 / this.IMG_COUNT) * -1
    }%)`;
    this.container.ontransitionend = () => {
      this.controlChildNodes(direction);
    };
  }
  controlChildNodes(direction) {
    this.container.removeAttribute('style');
    direction === 1
      ? this.container.appendChild(this.container.firstElementChild)
      : this.container.insertBefore(
          this.container.lastElementChild,
          this.container.firstElementChild,
        );
  }
}

const carousel = new Carousel();
carousel.init();
