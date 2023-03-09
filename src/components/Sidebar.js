import { SIDEBAR_SIZE } from '../constant.js';

class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    shadow.innerHTML = `
      <icon-element name="close" size="24" fill="var(--black-60)" id="sidebar-close-btn"></icon-element>
      <div class="container">
        <section class="main">
          <sidebar-back-element> </sidebar-back-element>
          <sidebar-category-element> </sidebar-category-element>
          <sidebar-fold-element> </sidebar-fold-element>
          <sidebar-header-element> </sidebar-header-element>
          <sidebar-list-element> </sidebar-list-element>
          <sidebar-title-element> </sidebar-title-element>
        </section>
        <section class="sub hide">
          Sub
        </section>
      </div>

      <backdrop-element></backdrop-element>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  showAction() {
    document.body.append(this);
    this.isOpen = true;
  }

  closeAction() {
    this.remove();
    this.isOpen = false;
  }

  getStyle() {
    const style = document.createElement('style');
    const type = this.getAttribute('type');

    style.textContent = `
      :host {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
      }

      icon-element[name="close"] {
        position: absolute;
        z-index: 2;
        top: 8px;
        left: ${SIDEBAR_SIZE + 8}px;
      }

      icon-element[name="close"]:hover {
        cursor: pointer;
      }

      .container {
        width: ${SIDEBAR_SIZE}px;
        height: 100%;
        z-index: 1;
        position: relative;
        background-color: var(--white);
        overflow-x: hidden;
      }

      .main, .sub {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }

      .main {
        background-color: red;
        animation: slide 1s forwards;
      }

      .sub {
        background-color: yellow;
        animation: slide 1s forwards;
      }


      .hide {
        display: none;
        opactiy: 0;
      }

      @keyframes slide {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(0%);
        }
      }

    `;
    return style;
  }
}

export default Sidebar;
