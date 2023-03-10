import { SIDEBAR_SIZE, SIDEBAR_HEADER_HEIGHT } from '../constant.js';

class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    shadow.innerHTML = `
      
      <div class="wrap">
        <icon-element name="close" size="24" fill="var(--black-60)" id="sidebar-close-btn"></icon-element>
        
          <sidebar-header-element> </sidebar-header-element>
          <div class="container">
            <sidebar-main-element></sidebar-main-element>
            <sidebar-sub-element></sidebar-sub-element>
          </div>
        
      </div>

      <backdrop-element></backdrop-element>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  showSidebar() {
    document.body.append(this);
    this.isOpen = true;
  }

  closeSidebar() {
    const wrap = this.shadowRoot.querySelector('.wrap');
    wrap.style.animation = 'slide-right .3s forwards';
    setTimeout(() => {
      this.remove();
      this.isOpen = false;
    }, 300);
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

      .wrap {
        animation: slide-left .5s;
        transition: var(--default-transition);
        position: fixed;
        top: 0;
        left: 0;
        width: ${SIDEBAR_SIZE + 8 + 24}px;
        height: 100%;
        z-index: 1;
      }

      icon-element[name="close"] {
        position: fixed;
        z-index: 2;
        top: 8px;
        left: ${SIDEBAR_SIZE + 8}px;
      }

      icon-element[name="close"]:hover {
        cursor: pointer;
      }

      sidebar-header-element {
        width: ${SIDEBAR_SIZE}px;
      }

      .container {
        width: ${SIDEBAR_SIZE}px;
        height: 100%;
        display: flex;
        background-color: var(--white);
        overflow-x: hidden;
        position: relative;
      }

      

      sidebar-main-element {
        position: absolute;
      }

      sidebar-sub-element {
        position: absolute;
        transform: translateX(100%);
      }


      .slide-left sidebar-main-element, .slide-left sidebar-sub-element {
        animation: slide-left .5s forwards;
      }

      .slide-right sidebar-main-element, .slide-right sidebar-sub-element {
        animation: slide-right .5s forwards;
      }

      @keyframes slide-left {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0%);
        }
      }

      @keyframes slide-right {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

    `;
    return style;
  }
}

export default Sidebar;
