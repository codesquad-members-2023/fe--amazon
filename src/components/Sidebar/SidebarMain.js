import { SIDEBAR_SIZE } from '../../constant.js';

class SidebarMain extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    shadow.innerHTML = `
      <sidebar-back-element> </sidebar-back-element>
      <sidebar-category-element> </sidebar-category-element>
      <div id="folding-container">
        <sidebar-fold-element id="folidng-btn"></sidebar-fold-element>
        <ul class="folidng-list">
          <sidebar-list-element> </sidebar-list-element>
          <sidebar-list-element> </sidebar-list-element>
          <sidebar-list-element> </sidebar-list-element>
          <sidebar-unfold-element id="unfolidng-btn"></sidebar-unfold-element>
        </ul>
        
      </div>
      
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

      .folidng-list {
        padding: 0;
        list-style: none;
        margin: 0;
        opacity: 0;
        height: 0;
        overflow: hidden;
      }

      .unfolded {
        opacity: 1;
        height: auto;
        transition: height .3s ease-in, opacity .3s ease-in;
      }
    `;
    return style;
  }
}

export default SidebarMain;
