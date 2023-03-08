class Action extends HTMLElement {
  constructor() {
    super();

    const text = this.getAttribute('text');
    const flexibleBtn = this.getAttribute('flexibleBtn');
    const mainBtn = this.getAttribute('mainBtn');
    const subBtn = this.getAttribute('subBtn');
    const caption = this.getAttribute('caption');
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
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
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const width = this.getAttribute('width');

    style.textContent = `
      :host {
        display: block;
        width: ${width ? width : '365px'};
        position: relative;
        padding: 16px;
        background-color: var(--white);
        border-radius: 4px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }

      :host::before {
        content: "";
        position: absolute;
        top: -28px;
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-top: 18px solid transparent; /* 삼각형의 위쪽 변 */
        border-right: 8px solid transparent; /* 삼각형의 오른쪽 변 */
        border-left: 8px solid transparent; /* 삼각형의 왼쪽 변 */
        border-bottom: 18px solid var(--white); /* 삼각형의 아래쪽 변 */
        z-index: 10000;
      }
    `;
    return style;
  }
}

export default Action;
