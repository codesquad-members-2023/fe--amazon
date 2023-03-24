import sliderStyle from './sliderStyle.js';
import SliderImage from './SliderImage/SliderImage.js';
import { SLIDER_IMAGES_LENGTH } from '@constant';
import { half } from '@utils';

class Slider extends HTMLElement {
  constructor() {
    super();
    this.addHTML();
    this.addStyle();
    const images = this.getImages();
    this.appendSlides(images);
  }

  addHTML() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      <div class="wrap">
        <ul class="slide-container">
        </ul>
        <div class="controller-container">
          <slider-controller-element position="left"></slider-controller-element>
          <slider-controller-element position="right"></slider-controller-element>
        </div>
      </ul>
    `;
  }

  addStyle() {
    const style = sliderStyle.call(this);
    this.shadowRoot.append(style);
  }

  getImages() {
    const images = Array.from({ length: SLIDER_IMAGES_LENGTH }).map((_, i) => {
      return `slide0${i + 1}.jpg`;
    });
    const rearrangedImages = this.reArrangeImagesOrder(images);
    return rearrangedImages;
  }

  reArrangeImagesOrder(images) {
    const halfNum = half(SLIDER_IMAGES_LENGTH);
    const firstImages = images.slice(0, halfNum);
    const secondImages = images.slice(halfNum, SLIDER_IMAGES_LENGTH);
    const arrangedImages = [...secondImages, ...firstImages];
    return arrangedImages;
  }

  appendSlides(arrangedImages) {
    arrangedImages.forEach((image) => this.appendEachSlide.call(this, image));
  }

  appendEachSlide(image) {
    const sliderImage = SliderImage();
    const slideContainer = this.shadow.querySelector('.slide-container');
    const slideImageInstance = sliderImage.cloneNode(true);
    slideImageInstance.style.backgroundImage = `url('public/assets/images/${image}')`;
    slideContainer.append(slideImageInstance);
  }
}

export default Slider;
