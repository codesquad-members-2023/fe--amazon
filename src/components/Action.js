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

  setActionPosition(event) {
    const e = !!event.detail ? event.detail : event;

    const docWidth = window.innerWidth;
    const action = this.shadowRoot.querySelector('action-element');
    const actionWidth = action.getBoundingClientRect().width;
    const targetX = e.target.getBoundingClientRect().x;
    const targetY = e.target.getBoundingClientRect().y;
    const targetHeight = e.target.getBoundingClientRect().height;
    action.style.position = 'absolute';
    const isWidthOverflow = targetX + actionWidth > docWidth;
    if (!isWidthOverflow) {
      action.style.left = `${targetX}px`;
    } else {
      action.style.right = `16px`;
    }
    action.style.top = `${targetY + targetHeight + 16}px`;
    action.translateX = '-50%';
  }

  setPointerPosition(event, id) {
    const e = !!event.detail ? event.detail : event;

    const action = this.shadowRoot.querySelector('action-element');
    const actionX = action.getBoundingClientRect().x;
    const targetX = e.target.getBoundingClientRect().x;
    const targetWidth = e.target.getBoundingClientRect().width;
    const pointerPosition = targetX - actionX + targetWidth / 2;
    const container = this.shadowRoot
      .querySelector('action-element')
      .shadowRoot.querySelector('.container');
    container.style.setProperty(`--${id}-pointer-left`, `${pointerPosition}px`);
  }

  showAction(e, id) {
    console.log(e);
    document.body.append(this);
    this.isOpen = true;
    this.setActionPosition(e);
    this.setPointerPosition(e, id);
  }

  closeAction() {
    this.remove();
    this.isOpen = false;
  }

  getStyle() {
    const style = document.createElement('style');

    style.textContent = `
      :host {
        position: absolute;
      }

      .container {
        display: block;

        width: ${this.width ? this.width : '365px'};

        padding: 16px;
        background-color: var(--white);
        border-radius: 4px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }

      .container::before {
        content: "";
        position: absolute;
        top: -28px;
        left: var(--${this.id}-pointer-left);
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
