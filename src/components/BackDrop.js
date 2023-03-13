class Backdrop extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');

    style.textContent = `
      :host {
        width: 100%;
        height: 100%;
        display: block;
        background-color: var(--black-40);
        position: fixed;
        top: 0;
        left: 0;
      }
    `;
    return style;
  }
}

export default Backdrop;
