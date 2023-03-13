import { SIDEBAR_SIZE } from '../../constant.js';

class SidebarSub extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    shadow.innerHTML = `
      <sidebar-back-element></sidebar-back-element>
      <div id="sidebar-sub-content"></div>
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
        background-color: var(--white);
      }
    `;
    return style;
  }
}

export default SidebarSub;
