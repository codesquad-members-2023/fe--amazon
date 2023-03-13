import { SIDEBAR_HEADER_HEIGHT } from '../../constant.js';
class SidebarHeader extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<icon-element name="user" fill="var(--white)"></icon-element>안녕하세요, 로그인`;
    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      :host {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        background-color: var(--black);
        color: var(--white);
        height: ${SIDEBAR_HEADER_HEIGHT}px;
        padding: 16px 16px 16px 32px;
        box-sizing: border-box;

        font-weight: var(--bold-lg-weight);
        font-size: var(--bold-lg-size);
        line-height: var(--bold-lg-height);
        letter-spacing: var(--bold-lg-spacing);
      }
      
    `;
    return style;
  }
}

export default SidebarHeader;
