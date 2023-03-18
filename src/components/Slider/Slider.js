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
    ];

    const middleNum = Math.ceil(images.length / 2);

    const firstImages = images.slice(0, middleNum);
    const secondImages = images.slice(middleNum, images.length);
    const arrangedImages = [...secondImages, ...firstImages];

    shadow.innerHTML = `
      <div class="wrap">
        <ul class="slide-container">
          ${arrangedImages.reduce(
            (output, image) =>
              output +
              `
              <li class="slide" style="background-image: url('public/assets/images/${image}')">
              </li>
            `,
            ''
          )}
        </ul>
        <div class="controller-container">
          <slider-controller-element position="left"></slider-controller-element>
          <slider-controller-element position="right"></slider-controller-element>
        </div>
      </ul>
    `;

    const isEven = images.length % 2 === 0;
    const middleSlide =
      this.shadowRoot.querySelectorAll('.slide')[
        isEven ? middleNum : middleNum - 1
      ];
    middleSlide.classList.add('middle');
    middleSlide.previousElementSibling.classList.add('left');
    middleSlide.nextElementSibling.classList.add('right');

    this.shadowRoot.append(sliderStyle.call(this));
  }
}

export default Slider;
