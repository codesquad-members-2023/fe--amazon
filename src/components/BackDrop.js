import backdropStyle from '../styles/components/backdrop.js';

class Backdrop extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(backdropStyle());
  }
}

export default Backdrop;
