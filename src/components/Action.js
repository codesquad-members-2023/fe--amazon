import { ACTION_SIZE } from '../constant';
import actionStyle from '../styles/components/actionStyle.js';

class Action extends HTMLElement {
  constructor() {
    super();

    const flexibleBtn = this.getAttribute('flexibleBtn');
    const mainBtn = this.getAttribute('mainBtn');
    const subBtn = this.getAttribute('subBtn');
    const shadow = this.attachShadow({ mode: 'open' });

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

    const id = this.id;
    this.shadowRoot.append(actionStyle.call(this, id));
  }

  showAction(eventTarget, id) {
    eventTarget.shadowRoot.append(this);
    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);

    this.setWidth(id);
    this.setActionPosition(eventTarget);
    this.setPointerPosition(eventTarget, id);
  }

  closeAction() {
    this.remove();
    this.backdrop.remove();
  }

  setActionPosition(eventTarget) {
    const targetRect = eventTarget.getBoundingClientRect();
    const action = this.shadowRoot.querySelector('action-element');
    const actionRect = action.getBoundingClientRect();
    action.style.position = 'absolute';
    const isWidthOverflowLeft = targetRect.left - actionRect.width / 2 < 0;
    const isWidthOverflowRight =
      targetRect.left + actionRect.width > window.innerWidth;

    if (isWidthOverflowLeft) {
      action.style.left = `16px`;
    } else if (isWidthOverflowRight) {
      action.style.right = `16px`;
    } else {
      action.style.transform = `translateX(-${targetRect.width / 2}px)`;
    }
    action.style.top = `${targetRect.top + targetRect.height}px`;
    action.translateX = '-50%';
  }

  setPointerPosition(eventTarget, id) {
    const action = this.shadowRoot.querySelector('action-element');
    const actionRect = action.getBoundingClientRect();
    const targetRect = eventTarget.getBoundingClientRect();
    const pointerPosition = targetRect.x - actionRect.x + targetRect.width / 2;
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
}

export default Action;
