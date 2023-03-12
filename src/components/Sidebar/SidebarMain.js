import { SIDEBAR_SIZE } from '../../constant.js';
import { menus } from '../../data/menu.js';

class SidebarMain extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    const dividingNum = 4;

    shadow.innerHTML = `
      ${menus
        .map((menu) => {
          if (menu.categories.length <= dividingNum) {
            return `
            <section class="section" id="${menu.id}">
              <sidebar-title-element>${menu.title}</sidebar-title-element>
              ${menu.categories
                .map((category) => {
                  return `
                    <sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>
                  `;
                })
                .join('')}
            </section>`;
          }

          const menuDefault = menu.categories.slice(0, dividingNum);
          const menuOverflowed = menu.categories.slice(
            dividingNum,
            menu.categories.length
          );
          return `
              <section class="section" id="${menu.id}">
                <sidebar-title-element>${menu.title}</sidebar-title-element>
                ${menuDefault
                  .map((category) => {
                    return `<sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>`;
                  })
                  .join('')}
                <div id="folding-container">
                  <sidebar-fold-element id="unfolidng-btn"></sidebar-fold-element>
                  <ul id="folidng-list">
                    ${menuOverflowed
                      .map((category) => {
                        return `<sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>`;
                      })
                      .join('')}
                    <sidebar-unfold-element id="folidng-btn"></sidebar-unfold-element>
                  </ul>
                </div>
              </section>`;
        })
        .join('')}
    `;

    this.shadowRoot.append(this.getStyle());
  }

  createTitle(parent, text) {
    const title = document.createElement('sidebar-title-element');
    title.shadowRoot.querySelector('p').innerHTML = text;
    parent.append(title);
  }

  createCategory(parent, text) {
    const category = document.createElement('sidebar-category-element');
    category.shadowRoot.querySelector('p').innerHTML = text;
    parent.append(category);
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

      #folidng-list {
        padding: 0;
        list-style: none;
        margin: 0;
        opacity: 0;
        height: 0;
        overflow: hidden;
      }

      #folidng-list.unfolded {
        opacity: 1;
        height: auto;
      }

      #folidng-list.slide-down {
        animation: slide-down .3s forwards;
      }

      #folidng-list.slide-up {
        animation: slide-up .3s forwards;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      .section {
        border-bottom: 1px solid var(--gray-100);
      }

      .section:last-of-type {
        border-bottom: none;
      }

      @keyframes slide-up {
        0% {
          opacity: 1;
          height: auto;
        }
        100% {
          opacity: 0;
          height: 0;
        }
      }

      @keyframes slide-down {
        0% {
          opacity: 0;
          height: 0;
        }
        100% {
          opacity: 1;
          height: auto;
        }
    `;
    return style;
  }
}

export default SidebarMain;
