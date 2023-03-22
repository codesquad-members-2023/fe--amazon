import SidebarMainSection from '../SidebarMainSection.js';
import sidebarMainSectionStyle from '../sidebarMainSectionStyle';
import {
  SIDEBAR_CATEGORY_HEIGHT,
  SIDEBAR_FOLDING_BTN_HEIGHT,
  FOLD_THRESHOLD,
} from '@constant';

class SidebarMainSectionDefault extends SidebarMainSection {
  constructor() {
    super();
    const hostElement = document.createElement('section');
    const categoryData = JSON.parse(
      decodeURIComponent(this.getAttribute('data-category'))
    );
    const id = categoryData.id;
    hostElement.id = id;

    hostElement.innerHTML = `
      <sidebar-title-element>${categoryData.title}</sidebar-title-element>
      ${categoryData.categories
        .map((category) => {
          return `
            <sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>
          `;
        })
        .join('')}`;

    const categoryLength = categoryData.categories.length;
    const foldingListHeight =
      SIDEBAR_CATEGORY_HEIGHT * (categoryLength - FOLD_THRESHOLD) +
      SIDEBAR_FOLDING_BTN_HEIGHT;

    this.append(hostElement);
    const style = sidebarMainSectionStyle.call(this, id, foldingListHeight);
    this.append(style);
  }
}

export default SidebarMainSectionDefault;
