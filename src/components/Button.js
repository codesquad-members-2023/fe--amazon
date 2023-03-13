import buttonStyle from '../styles/components/button.js';

class Button extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<button>${text}</button>`;

    const type = this.getAttribute('type');
    this.shadowRoot.append(buttonStyle(type));
  }
}

export default Button;
