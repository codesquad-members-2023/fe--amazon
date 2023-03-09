import Action from '../Action.js';

class ChangeAdressAction extends Action {
  constructor(id) {
    super();

    const text = this.innerText;
    const shadow = this.shadowRoot;

    shadow.innerHTML = `
    <action-element id="${id}" mainBtn="주소 변경" subBtn="계속" pointerPosition="left">
      <span slot="text">KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</span>
    </action-element>
    <backdrop-element></backdrop-element>
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
    `;
    return style;
  }
}

export default ChangeAdressAction;
