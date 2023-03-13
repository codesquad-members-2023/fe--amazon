import sidebarBackStyle from '../../../styles/components/sidebar/sidebarSub/sidebarBack.js';

class SideBarBack extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<button><icon-element name="arrow-left" fill="var(--gray-600)"></icon-element>주메뉴</button>`;
    this.shadowRoot.append(sidebarBackStyle());
  }
}

export default SideBarBack;
