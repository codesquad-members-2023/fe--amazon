import { ID, ACTION_SIZE } from '../constant';

class Action extends HTMLElement {
  constructor() {
    super();

    const flexibleBtn = this.getAttribute('flexibleBtn');
    const mainBtn = this.getAttribute('mainBtn');
    const subBtn = this.getAttribute('subBtn');
    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    shadow.innerHTML = `
      <div class="wrap">
        <div class="pointer"></div>
        <div class="container">
          <section class="body">
            <p class="text"><slot name="text"></slot></p>
          </section>
          <section class="footer">
            <div class="btn-container">
              ${
                flexibleBtn
                  ? `<btn-element type="flexible">${flexibleBtn}</btn-element>`
                  : ''
              }
              ${
                mainBtn
                  ? `<btn-element type="main">${mainBtn}</btn-element>`
                  : ''
              }
              ${subBtn ? `<btn-element type="sub">${subBtn}</btn-element>` : ''}
            </div>
            <p class="caption"><slot name="caption"></slot><p>
            <slot name="bottom"></slot>
          </section>
        </div>
      </div>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  setActionPosition(event, id) {
    const e = !!event.detail ? event.detail : event;
    const docWidth = window.innerWidth;
    const action = this.shadowRoot.querySelector('action-element');
    const actionWidth = action.getBoundingClientRect().width;
    const targetX = e.target.getBoundingClientRect().left;
    const targetY = e.target.getBoundingClientRect().top;
    const targetHeight = e.target.getBoundingClientRect().height;
    const targetWidth = e.target.getBoundingClientRect().width;
    action.style.position = 'absolute';

    const isWidthOverflowLeft = targetX - actionWidth / 2 < 0;
    const isWidthOverflowRight = targetX + actionWidth > docWidth;

    if (isWidthOverflowLeft) {
      action.style.left = `16px`;
    } else if (isWidthOverflowRight) {
      action.style.right = `16px`;
    } else {
      action.style.transform = `translateX(-${targetWidth / 2}px)`;
    }
    action.style.top = `${targetY + targetHeight}px`;
    action.translateX = '-50%';

    this.setPointerPosition(e, id);
  }

  setPointerPosition(event, id) {
    const e = !!event.detail ? event.detail : event;
    const action = this.shadowRoot.querySelector('action-element');
    const actionX = action.getBoundingClientRect().x;
    const targetX = e.target.getBoundingClientRect().x;
    const targetWidth = e.target.getBoundingClientRect().width;
    const pointerPosition = targetX - actionX + targetWidth / 2;
    const wrap = this.shadowRoot
      .querySelector('action-element')
      .shadowRoot.querySelector('.wrap');
    wrap.style.setProperty(`--${id}-pointer-left`, `${pointerPosition}px`);
  }

  setWidth(id) {
    const wrap = this.shadowRoot
      .querySelector('action-element')
      .shadowRoot.querySelector('.wrap');

    wrap.style.width = `${ACTION_SIZE[id]}px`;
  }

  showAction(e, id) {
    e.detail.target.shadowRoot.append(this);
    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);
    this.isOpen = true;
    this.setWidth(id);
    this.setActionPosition(e, id);
  }

  closeAction() {
    this.remove();
    this.isOpen = false;
    this.backdrop.remove();
  }

  getStyle() {
    const style = document.createElement('style');

    style.textContent = `
      :host {
        position: absolute;
      }

      .wrap {
        display: block;
        width: 365px;
        padding-top: 12px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }

      .container {
        background-color: var(--white);
        padding: 16px;
        border-radius: 4px;
      }

      section.header {
        font-size: var(--bold-md-size);
        font-weight: var(--bold-md-weight);
        line-height: var(--bold-md-height);
        letter-spacing: var(--bold-md-spacing);

        text-align: center;
      }

      .pointer {
        content: "";
        position: absolute;
        top: -16px;
        left: var(--${this.id}-pointer-left);
        border-width: 10px;
        border-style: solid;
        border-top: 18px solid transparent;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 18px solid var(--white);
        z-index: 10000;
      }

      .btn-container {
        display: flex;
        gap: 8px;
        margin: 0 auto;
      }

      btn-element[type="flexible"] {
        margin: 0 auto;
      }

      btn-element[type="main"] {
        order: 1;
      }

      btn-element[type="sub"] {
        order: 0;
        margin-left: auto;
      }

      p {
        margin: 0;
      }

      .text {
        font-size: var(--body-sm-size);
        font-weight: var(--body-sm-weight);
        line-height: var(--body-sm-height);
        letter-spacing: var(--body-sm-spacing);
      }

      .caption {
        margin-top: 8px;
        text-align: center;
        font-size: var(--body-sm-size);
        font-weight: var(--body-sm-weight);
        line-height: var(--body-sm-height);
        letter-spacing: var(--body-sm-spacing);
      }
    `;
    return style;
  }
}

export default Action;
