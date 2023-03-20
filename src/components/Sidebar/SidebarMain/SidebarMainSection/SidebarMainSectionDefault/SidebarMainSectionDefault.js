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
    const section = document.createElement('section');
    const data = JSON.parse(decodeURIComponent(this.getAttribute('data')));
    const id = data.id;
    section.id = id;

    section.innerHTML = `
      <sidebar-title-element>${data.title}</sidebar-title-element>
      ${data.categories
        .map((category) => {
          return `
            <sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>
          `;
        })
        .join('')}`;

    const categoryLength = data.categories.length;
    const foldingListHeight =
      SIDEBAR_CATEGORY_HEIGHT * (categoryLength - FOLD_THRESHOLD) +
      SIDEBAR_FOLDING_BTN_HEIGHT;

    this.append(section);
    const style = sidebarMainSectionStyle.call(this, id, foldingListHeight);
    this.append(style);
  }
}

export default SidebarMainSectionDefault;
