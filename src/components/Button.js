import buttonStyle from '../styles/components/button.js';

class Button extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });
    const style = this.getAttribute('style');

    shadow.innerHTML = `<button style="${style}">${text}</button>`;

    const type = this.getAttribute('type');
    this.shadowRoot.append(buttonStyle(type));
  }
}

export default Button;
