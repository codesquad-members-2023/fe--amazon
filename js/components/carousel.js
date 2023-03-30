class Carousel {
  #directoryPath;
  #RIGHT = -1;
  #LEFT = 1;
  constructor({ numberOfImages, delayTime, carouselImagesPath }) {
    this.CAROUSEL_COUNT = numberOfImages;
    this.DELAY_TIME = delayTime;
    this.#directoryPath = carouselImagesPath;
    this.slider = document.querySelector('.slider');
  }

  init() {
    this.setImages();
    this.slideAuto();
    this.clickSlide();
  }

  setImages() {
    const imageFiles = Array.from({ length : this.CAROUSEL_COUNT }, (_, i) => i);
    const imageTemplate = imageFiles.reduce((template, number) => {
      template += `<img class="slide" src="${this.#directoryPath}/${number}.jpg" alt="carousel 배경이미지${number}">`;
      return template;
    }, '');
    this.slider.insertAdjacentHTML('afterbegin', imageTemplate);
  }

  clickSlide() {
    const $leftBtn = document.getElementById('carousel_left');
    const $rightBtn = document.getElementById('carousel_right');
    $leftBtn.addEventListener('click', this.translateSlideHandler.bind(this));
    $rightBtn.addEventListener('click', this.translateSlideHandler.bind(this));
  }

  translateSlideHandler({ target }) {
    const direction = target.closest('span').id === 'carousel_left' ? this.#LEFT : this.#RIGHT;
    this.translateSlide(direction);
  }

  translateSlide(direction) {
    this.slider.style.transitionDuration = '500ms';
    this.slider.style.transform = `translateX(${direction * 100}%)`;
    this.slider.ontransitionend = () => this.appendSlide(direction);
  }

  appendSlide(direction) {
    this.slider.removeAttribute('style');
    if(direction > 0) {
      this.slider.insertBefore(this.slider.lastElementChild, this.slider.firstElementChild);
    } else this.slider.appendChild(this.slider.firstElementChild);
  }

  slideAuto() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let lastTime = 0;
    const moveCarousel = currentTime => {
      let deltaTime = currentTime - lastTime;
      if (deltaTime > this.DELAY_TIME) {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        this.translateSlide(this.#RIGHT);
        lastTime = currentTime;
      }
      requestAnimationFrame(moveCarousel);
    }
    requestAnimationFrame(moveCarousel);
  }
}
export { Carousel };