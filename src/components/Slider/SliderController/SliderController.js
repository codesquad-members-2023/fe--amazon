import sliderControllerStyle from './sliderControllerStyle.js';

class SliderController extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const position = this.getAttribute('position');
    const rotate = position === 'right' ? '-90' : '90';

    shadow.innerHTML = `
      <div class="controller"></div>
    `;

    this.shadowRoot.append(sliderControllerStyle.call(this, rotate));
  }
}

export default SliderController;
