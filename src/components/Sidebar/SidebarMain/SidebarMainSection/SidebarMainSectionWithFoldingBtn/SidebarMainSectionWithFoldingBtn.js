import {
  SIDEBAR_CATEGORY_HEIGHT,
  SIDEBAR_FOLDING_BTN_HEIGHT,
  FOLD_THRESHOLD,
} from '@constant';
import SidebarMainSection from '../SidebarMainSection.js';
import sidebarMainSectionStyle from '../sidebarMainSectionStyle';

class SidebarMainSectionWithFoldingBtn extends SidebarMainSection {
  constructor() {
    super();

    const hostElement = document.createElement('section');
    const categoryData = JSON.parse(
      decodeURIComponent(this.getAttribute('data-category'))
    );
    const id = categoryData.id;
    hostElement.id = id;

    const menuDefault = categoryData.categories.slice(0, FOLD_THRESHOLD);
    const menuOverflowed = categoryData.categories.slice(
      FOLD_THRESHOLD,
      categoryData.categories.length
    );
    hostElement.innerHTML = `
    <sidebar-title-element>${categoryData.title}</sidebar-title-element>
    ${menuDefault
      .map((category) => {
        return `<sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>`;
      })
      .join('')}
      <div id="folding-container">
        <sidebar-fold-element class="unfolidng-btn"></sidebar-fold-element>
        <ul class="folding-list">
          ${menuOverflowed
            .map((category) => {
              return `<sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>`;
            })
            .join('')}
          <sidebar-unfold-element class="folidng-btn"></sidebar-unfold-element>
        </ul>
      </div>
    `;

    const categoryLength = categoryData.categories.length;
    const foldingListHeight =
      SIDEBAR_CATEGORY_HEIGHT * (categoryLength - FOLD_THRESHOLD) +
      SIDEBAR_FOLDING_BTN_HEIGHT;

    this.append(hostElement);
    const style = sidebarMainSectionStyle.call(this, id, foldingListHeight);
    this.append(style);
  }
}

export default SidebarMainSectionWithFoldingBtn;
