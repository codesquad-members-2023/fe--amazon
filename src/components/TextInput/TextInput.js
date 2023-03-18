import textinputStyle from './textinputStyle.js';

class TextInput extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const placeholder = this.getAttribute('placeholder');

    shadow.innerHTML = `
      <form>
        <input type="text" placeholder="${placeholder}">
      </form>
      <button><icon-element name="search"></icon-element></button>
    `;

    this.shadowRoot.append(textinputStyle.call(this));
  }
}

export default TextInput;
