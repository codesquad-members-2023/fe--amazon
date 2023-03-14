import { menus } from '../../data/menu.js';
import sidebarMainStyle from '../../styles/components/sidebar/sidebarMain.js';

class SidebarMain extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
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
                  <ul id="folding-list" class="folded">
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

    this.shadowRoot.append(sidebarMainStyle());
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
}

export default SidebarMain;
