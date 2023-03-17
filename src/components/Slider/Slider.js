import sliderStyle from './sliderStyle.js';

class Slider extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const images = [
      'slide01.jpg',
      'slide02.jpg',
      'slide03.jpg',
      'slide04.jpg',
      'slide05.jpg',
      'sldie06.jpg',
    ];

    shadow.innerHTML = `
      <ul class="container">
        ${images.reduce(
          (output, image) =>
            output +
            `
            <li class="slide" style="background-image: url('public/assets/images/${image}');">
            </li>
          `,
          ''
        )}
        <div class="controller-container">
          <slider-controller-element></slider-controller-element>
          <slider-controller-element position="right"></slider-controller-element>
        </div>
      </ul>
    `;

    const firstSlide = this.shadowRoot.querySelector('.slide');
    firstSlide.classList.add('show');

    this.shadowRoot.append(sliderStyle.call(this));
  }
}

export default Slider;
