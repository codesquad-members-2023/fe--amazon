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

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const width = this.getAttribute('width');

    style.textContent = `
      :host {
        position: relative;
      }

      form {
        display: flex;
        border-radius: 4px;
        background: var(--white);
        padding-right: 40px;
      }

      form:focus-within {
        outline: 2px solid var(--primary-orange-200);
      }

      input {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0px 0px 0px 12px;
        gap: 12px;
        border: none;
        outline: none;
        background: transparent;
        height: 40px;
        box-sizing: border-box;
      }

      button {
        position: absolute;
        right: 0px;
        top: 0px;
        background-color: var(--primary-orange-100);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 0px 4px 4px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button:hover {
        background-color: var(--primary-orange-200);
        cursor: pointer;
      }

      button:focus {
        outline: 2px solid var(--primary-orange-200);
      }
    `;
    return style;
  }
}

export default TextInput;
