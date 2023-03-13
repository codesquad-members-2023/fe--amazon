import { SIDEBAR_SIZE } from '../../constant.js';

class SidebarSub extends HTMLElement {
  constructor(submenus) {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;

    shadow.innerHTML = `
      ${submenus
        .map((submenu) => {
          const title = submenu.title;
          const categories = submenu.categories;

          return `
          
            <section>
              <sidebar-title-element>${title}</sidebar-title-element>
              ${categories
                .map((category) => {
                  return `
                    <sidebar-category-element>${category}</sidebar-category-element>
                  `;
                })
                .join('')}
            </section>
        `;
        })
        .join('')}
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

      section {
        border-top: 1px solid #e5e5e5;
      }

      @keyframes slide-right {
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

export default SidebarSub;
