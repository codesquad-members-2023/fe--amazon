import { menus } from '@data/menu.js';
import sidebarMainStyle from './sidebarMainStyle.js';
import {
  SIDEBAR_CATEGORY_HEIGHT,
  SIDEBAR_FOLDING_BTN_HEIGHT,
  FOLD_THRESHOLD,
} from '@constant';

class SidebarMain extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      ${menus
        .map((menu) => {
          const categoryData = encodeURIComponent(JSON.stringify(menu));
          const isOverflowed = menu.categories.length > FOLD_THRESHOLD;
          if (isOverflowed) {
            return `<sidebar-main-section-with-folding-btn-element data-category=${categoryData}></sidebar-main-section-with-folding-btn-element>`;
          }
          return `<sidebar-main-section-default-element data-category=${categoryData}></sidebar-main-section-default-element>`;
        })
        .join('')}
    `;

    const foldingListHeight =
      SIDEBAR_CATEGORY_HEIGHT * (menus[1].categories.length - FOLD_THRESHOLD) +
      SIDEBAR_FOLDING_BTN_HEIGHT;

    const style = sidebarMainStyle.call(this, foldingListHeight);
    this.shadowRoot.append(style);
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
