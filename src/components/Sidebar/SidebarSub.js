import sidebarSubStyle from '../../styles/components/sidebar/sidebarSub.js';

class SidebarSub extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <sidebar-back-element></sidebar-back-element>
      <div id="sidebar-sub-content"></div>
    `;

    this.shadowRoot.append(sidebarSubStyle());
  }
}

export default SidebarSub;
