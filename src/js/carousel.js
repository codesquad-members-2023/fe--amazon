export default class CarouselMaker {
  constructor(carouselCount) {
    this.carouselCount = carouselCount;
    this.carouselButtonContainer = document.querySelector('.carousel_button_container');
    this.carouselListTemplate;
    this.carousel;
    this.init();
  }

  init() {
    this.getCarouselItem();
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
    if (className.indexOf('prev') !== -1) return 1;
    if (className.indexOf('next') !== -1) return -1;
  }

  resortCarousel(translateDirection) {
    this.carousel.removeAttribute('style');
    translateDirection === 1
      ? this.carousel.insertBefore(this.carousel.lastElementChild, this.carousel.firstElementChild)
      : this.carousel.appendChild(this.carousel.firstElementChild);
  }

  translateCarousel({ target: { className } }) {
    const translateDirection = this.decideAddEventOrNot(className);
    this.carousel.style.transform = `translateX(${translateDirection * (100 / 5)}%)`;
    this.carousel.style.transitionDuration = '500ms';
    this.carousel.ontransitionend = () => this.resortCarousel(translateDirection);
  }

  setCarouselDelay() {
    setInterval(() => {
      this.translateCarousel({ target: { className: 'carousel_button next' } });
    }, 3000);
  }
}
