import { SIDEBAR_SIZE } from '../../constant.js';

class SidebarMain extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    shadow.innerHTML = `
      <sidebar-back-element> </sidebar-back-element>
      <sidebar-category-element> </sidebar-category-element>
      <sidebar-fold-element> </sidebar-fold-element>
      <sidebar-header-element> </sidebar-header-element>
      <sidebar-list-element> </sidebar-list-element>
      <sidebar-title-element> </sidebar-title-element>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      :host {
        display: block;
        width: ${SIDEBAR_SIZE}px;
        height: 100%;
      }
    `;
    return style;
  }
}

export default SidebarMain;
