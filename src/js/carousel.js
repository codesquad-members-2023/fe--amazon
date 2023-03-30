export default class CarouselMaker {
  constructor(carouselCount) {
    this.carouselCount = carouselCount;
    this.carouselButtonContainer = document.querySelector('.carousel_button_container');
    this.carouselListTemplate;
    this.carousel;
    this.carouselTotalWidth = 100;
    this.carouselTransitionDuration = 500;
    this.carouselDelayTime = 3000;
    this.init();
  }

  init() {
    this.makeCarouselItem();
    this.setCarouselItem();
    this.setCarouselEvent();
    this.setCarouselDelay();
  }

  setCarouselItem() {
    this.carouselButtonContainer.insertAdjacentHTML('beforebegin', this.carouselListTemplate);
    this.carousel = document.querySelector('.carousel');
  }

  makeCarouselItem() {
    const carouselList = Array.from({ length: this.carouselCount }, (_, i) => i);
    this.carouselListTemplate =
      carouselList.reduce(
        (acc, cur) => (acc += `<li class="carousel_item" id="carousel_item${cur}">${cur}</li>`),
        `<ul class="carousel">`
      ) + `</ul>`;
  }

  setCarouselEvent() {
    this.carouselButtonContainer.addEventListener('click', this.translateCarousel.bind(this));
  }

  decideAddEventOrNot(className) {
    if (className.indexOf('prev') !== -1) return 'prev';
    if (className.indexOf('next') !== -1) return 'next';
  }

  resortCarousel(translateDirection) {
    this.carousel.removeAttribute('style');
    translateDirection === 'prev'
      ? this.carousel.insertBefore(this.carousel.lastElementChild, this.carousel.firstElementChild)
      : this.carousel.appendChild(this.carousel.firstElementChild);
  }

  translateCarousel({ target: { className } }) {
    const translateDirection = this.decideAddEventOrNot(className);
    this.decideAddEventOrNot(className) === 'prev'
      ? this.translateLeftNext()
      : this.translateRightPrev();

    this.carousel.style.transitionDuration = `${this.carouselTransitionDuration}ms`;
    this.carousel.ontransitionend = () => this.resortCarousel(translateDirection);
  }

  translateLeft() {
    this.carousel.style.transform = `translateX(${this.carouselTotalWidth / this.carouselCount}%)`;
  }

  translateRight() {
    this.carousel.style.transform = `translateX(${-this.carouselTotalWidth / this.carouselCount}%)`;
  }

  setCarouselDelay() {
    setInterval(() => {
      this.translateCarousel({ target: { className: 'carousel_button next' } });
    }, this.carouselDelayTime);
  }
}
