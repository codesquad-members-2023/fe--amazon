import Action from '../Action.js';

class LoginAction extends Action {
  constructor(width, id) {
    super(width);

    const text = this.innerText;
    const shadow = this.shadowRoot;

    shadow.innerHTML = `
    <action-element id="${id}" flexibleBtn="flexible" mainBtn="main" subBtn="sub" pointerPosition="left">
      <div slot="text">ChangeAdressAction</div>
      <div slot="caption">캡션</div>
      <div slot="bottom">푸터</div>
    </action-element>
    <div class="backdrop"></div>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      action-element {
        z-index: 1;
      }

      .backdrop {
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

export default LoginAction;
