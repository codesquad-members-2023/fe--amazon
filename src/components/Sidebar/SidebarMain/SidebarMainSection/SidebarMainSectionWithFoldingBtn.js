import {
  SIDEBAR_CATEGORY_HEIGHT,
  SIDEBAR_FOLDING_BTN_HEIGHT,
  FOLD_THRESHOLD,
} from '@constant';
import SidebarMainSection from '../SidebarMainSection.js';
import sidebarMainSectionStyle from './sidebarMainSectionStyle';

class SidebarMainSectionWithFoldingBtn extends SidebarMainSection {
  constructor() {
    super();

    const section = document.createElement('section');
    const data = JSON.parse(decodeURIComponent(this.getAttribute('data')));
    const id = data.id;
    section.id = id;

    const menuDefault = data.categories.slice(0, FOLD_THRESHOLD);
    const menuOverflowed = data.categories.slice(
      FOLD_THRESHOLD,
      data.categories.length
    );
    section.innerHTML = `
    <sidebar-title-element>${data.title}</sidebar-title-element>
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

    const categoryLength = data.categories.length;
    const foldingListHeight =
      SIDEBAR_CATEGORY_HEIGHT * (categoryLength - FOLD_THRESHOLD) +
      SIDEBAR_FOLDING_BTN_HEIGHT;

    this.append(section);
    this.append(sidebarMainSectionStyle.call(this, id, foldingListHeight));
  }
}

export default SidebarMainSectionWithFoldingBtn;
