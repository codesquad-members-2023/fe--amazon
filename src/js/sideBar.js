import { $, $$ } from './util/dom.js';
import { SIDEBAR_DETAIL } from './constant/sideBarDetail.js';

export default class SideBar {
  constructor() {
    this.$sideBar = $('.side-bar');
    this.$sideBarBtn = $('.side-bar-btn');
    this.$closeSideBarBtn = $('.side-bar__close-btn', this.$sideBar);

    this.$expandedCategory = $('.expanded-category', this.$sideBar);
    this.$showAllBtn = $('#show-all-btn', this.$sideBar);
    this.$showLessBtn = $('#show-less-btn', this.$sideBar);

    this.$sideBarDimCover = $('.dim-cover__in-sideBar');
    // * private도 고려해보기
    this.SIDEBAR_CATEGORY = Object.keys(SIDEBAR_DETAIL);

    this.renderExpandedCategory();
  }

  renderExpandedCategory() {
    const carIdx = this.SIDEBAR_CATEGORY.indexOf('자동차 용품');
    const EXPANDED_CATEGORY = this.SIDEBAR_CATEGORY.slice(carIdx);
    const expandedCategoryTemplate = EXPANDED_CATEGORY.reduce(
      (template, category) =>
        template + String.raw`<li>${category}<span class="right-arrow-icon"></span></li>`,
      ''
    );

    this.$expandedCategory.insertAdjacentHTML('afterbegin', expandedCategoryTemplate);
  }

  openHandler() {
    this.$sideBar.classList.add('open');
    this.$sideBarDimCover.classList.remove('hidden');
  }

  closeHandler() {
    this.$sideBar.classList.remove('open');
    this.$sideBarDimCover.classList.add('hidden');
  }

  showAll() {
    if (this.$expandedCategory.maxHeight) {
      this.$expandedCategory.style.maxHeight = null;
      return;
    }
    this.$expandedCategory.style.maxHeight = `${this.$expandedCategory.scrollHeight}px`;
  }

  showLess() {
    if (!this.$expandedCategory.maxHeight) {
      this.$expandedCategory.style.maxHeight = null;
      return;
    }
    this.$expandedCategory.style.maxHeight = `${this.$expandedCategory.scrollHeight}px`;
  }

  addEvents() {
    this.$sideBarBtn.addEventListener('click', this.openHandler.bind(this));
    this.$closeSideBarBtn.addEventListener('click', this.closeHandler.bind(this));
    this.$sideBarDimCover.addEventListener('click', this.closeHandler.bind(this));

    this.$showAllBtn.addEventListener('click', this.showAll.bind(this));

    this.$showLessBtn.addEventListener('click', this.showLess.bind(this));
  }
}
