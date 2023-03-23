class Carousel {
  constructor(count) {
    this.CAROUSELCOUNT = count;
    this.directoryPath = '/asset/images/carousel';
    this.slider = document.querySelector('.slider');
    this.slides = document.querySelectorAll('.slide');
    this.leftBtn = document.getElementById('carousel_left');
    this.rightBtn = document.getElementById('carousel_right');
  }

  init() {
    this.setImage();
    this.slideHandler();
    this.slideAuto();
  }

  setImage() {
    const imageFiles = Array.from({ length : this.CAROUSELCOUNT }, (_, i) => i);
    const imageTemplate = imageFiles.reduce((acc, number) => {
      const img = `<img class="slide" src="${this.directoryPath}/${number}.jpg" alt="carousel 배경이미지${number}">`;
      acc += img;
      return acc;
    }, '');
    this.slider.insertAdjacentHTML('afterbegin', imageTemplate);
  }

  slideHandler() {
    this.leftBtn.addEventListener('click', this.translateSlide.bind(this));
    this.rightBtn.addEventListener('click', this.translateSlide.bind(this));
  }

  translateSlide({ target }) {
    const spanId = target.closest('span').id;
    this.slider.style.transitionDuration = '500ms';
    this.slider.style.transform = `translate3d(-50%, 0, 0)`;
  }

  slideAuto() {
    
  }
}

export { Carousel };