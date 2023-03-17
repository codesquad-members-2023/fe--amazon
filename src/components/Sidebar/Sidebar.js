import sidebarStyle from './sidebarStyle.js';

class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

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
    this.shadowRoot.append(sidebarStyle.call(this));
  }

  showSidebar() {
    const wrap = this.shadowRoot.querySelector('.wrap');
    wrap.style.animation = 'show .3s forwards';
    document.body.append(this);
  }

  closeSidebar() {
    const wrap = this.shadowRoot.querySelector('.wrap');
    wrap.style.animation = 'close .3s forwards';
    setTimeout(() => {
      this.remove();
    }, 300);
  }

  showSubSidebar() {
    const contianer = this.shadowRoot.querySelector('.container');
    contianer.classList.remove('slide-left');
    contianer.classList.add('slide-right');
  }

  closeSubSidebar(sideSubContent) {
    const contianer = this.shadowRoot.querySelector('.container');
    contianer.classList.remove('slide-right');
    contianer.classList.add('slide-left');
    setTimeout(() => {
      sideSubContent.remove();
    }, 500);
  }
}

export default Sidebar;
