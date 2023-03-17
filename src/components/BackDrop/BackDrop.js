import backdropStyle from './backdropStyle.js';

class Backdrop extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(backdropStyle.call(this));
  }
}

export default Backdrop;
