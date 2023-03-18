import sidebarBackStyle from './sidebarBackStyle.js';

class SideBarBack extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<button><icon-element name="arrow-left" fill="var(--gray-600)"></icon-element>주메뉴</button>`;
    this.shadowRoot.append(sidebarBackStyle.call(this));
  }
}

export default SideBarBack;
