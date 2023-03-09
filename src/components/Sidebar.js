class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <div>test</div>
    `;
    this.isOpen = false;

    this.shadowRoot.append(this.getStyle());
  }

  showAction(e, id) {
    document.body.append(this);
    this.isOpen = true;
  }

  closeAction() {
    this.remove();
    this.isOpen = false;
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      :host {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: red;
        z-index: 1;
      }
    `;
    return style;
  }
}

export default Sidebar;
