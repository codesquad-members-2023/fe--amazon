class Action extends HTMLElement {
  constructor(width) {
    super();

    this.width = width;

    const flexibleBtn = this.getAttribute('flexibleBtn');
    const mainBtn = this.getAttribute('mainBtn');
    const subBtn = this.getAttribute('subBtn');
    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    shadow.innerHTML = `
      <div class="container">
        <slot name="text"></slot>
        ${
          flexibleBtn
            ? `<btn-element type="flexible">${flexibleBtn}</btn-element>`
            : ''
        }
        ${mainBtn ? `<btn-element>${mainBtn}</btn-element>` : ''}
        ${subBtn ? `<btn-element>${subBtn}</btn-element>` : ''}

        <slot name="caption"></slot>
        <slot name="bottom"></slot>
      </div>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  showAction() {
    setTimeout(() => {
      document.body.append(this);
      this.isOpen = true;
    }, 100);
  }

  closeAction() {
    setTimeout(() => {
      this.remove();
      this.isOpen = false;
    }, 100);
  }

  getStyle() {
    const style = document.createElement('style');

    const pointerPosition = this.getAttribute('pointerPosition');
    const pointerLeft =
      pointerPosition === 'left'
        ? '16px'
        : pointerPosition === 'right'
        ? 'calc(100% - 16px)'
        : '50%';

    style.textContent = `
      .container {
        display: block;
        width: ${this.width ? this.width : '365px'};
        position: relative;
        padding: 16px;
        background-color: var(--white);
        border-radius: 4px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }

      .container::before {
        content: "";
        position: absolute;
        top: -28px;
        left: ${pointerLeft};
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-top: 18px solid transparent;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 18px solid var(--white);
        z-index: 10000;
      }
    `;
    return style;
  }
}

export default Action;
