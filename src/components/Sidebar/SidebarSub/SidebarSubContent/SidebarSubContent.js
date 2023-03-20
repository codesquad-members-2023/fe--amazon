import sidebarSubContentStyle from './sidebarSubContentStyle.js';

class SidebarSub extends HTMLElement {
  constructor(submenus) {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
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

    const style = sidebarSubContentStyle.call(this);
    this.shadowRoot.append(style);
  }
}

export default SidebarSub;
