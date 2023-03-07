class TextInput extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const placeholder = this.getAttribute('placeholder');

    shadow.innerHTML = `
      <div>
        <input type="text" placeholder="${placeholder}">
      </div>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const width = this.getAttribute('width');

    style.textContent = `
      input {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0px 0px 0px 12px;
        gap: 12px;

        height: 40px;

        background: var(--white);
        border-radius: 4px;
        box-sizing: border-box;
      }
    `;
    return style;
  }
}

export default TextInput;
