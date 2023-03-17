import sliderControllerStyle from './sliderControllerStyle.js';

class SliderController extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const position = this.getAttribute('position');

    shadow.innerHTML = `
      <div class="controller"></div>
    `;

    this.shadowRoot.append(sliderControllerStyle.call(this, position));
  }
}

export default SliderController;
