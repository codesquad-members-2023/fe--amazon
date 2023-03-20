import sliderControllerStyle from './sliderControllerStyle.js';

class SliderController extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const position = this.getAttribute('position');

    shadow.innerHTML = `
      <div class="controller"></div>
    `;

    const style = sliderControllerStyle.call(this, position);
    this.shadowRoot.append(style);
  }
}

export default SliderController;
