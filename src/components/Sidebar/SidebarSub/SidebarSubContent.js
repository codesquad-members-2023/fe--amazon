import sidebarSubContentStyle from '../../../styles/components/sidebar/sidebarSub/sidebarSubContent.js';

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

    this.shadowRoot.append(sidebarSubContentStyle());
  }
}

export default SidebarSub;
