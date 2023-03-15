import sidebarMainSectionStyle from '../../../styles/components/sidebar/sidebarMain/sidebarMainSectionStyle.js';
import {
  SIDEBAR_CATEGORY_HEIGHT,
  SIDEBAR_FOLDING_BTN_HEIGHT,
} from '../../../constant.js';

class SidebarMainSection extends HTMLElement {
  constructor() {
    super();

    const dividingNum = 4;
    const section = document.createElement('section');
    const data = JSON.parse(decodeURIComponent(this.getAttribute('data')));
    const id = data.id;
    section.id = id;
    const isOverflowed = data.categories.length > dividingNum;

    if (isOverflowed) {
      const menuDefault = data.categories.slice(0, dividingNum);
      const menuOverflowed = data.categories.slice(
        dividingNum,
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
    } else {
      section.innerHTML = `
        <sidebar-title-element>${data.title}</sidebar-title-element>
        ${data.categories
          .map((category) => {
            return `
              <sidebar-category-element id=${category.id}>${category.name}</sidebar-category-element>
            `;
          })
          .join('')}`;
    }

    const categoryLength = data.categories.length;
    const foldingListHeight =
      SIDEBAR_CATEGORY_HEIGHT * (categoryLength - dividingNum) +
      SIDEBAR_FOLDING_BTN_HEIGHT;

    this.append(section);
    this.append(sidebarMainSectionStyle.call(this, id, foldingListHeight));
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

export default SidebarMainSection;
