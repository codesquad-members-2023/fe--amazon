import { $, $$ } from './util/dom.js';
import { SIDE_BAR_DETAIL } from './data/sideBarDetail.js';

const makeListTemplate = (template, category) =>
  template + String.raw`<li>${category}<span class="right-arrow-icon"></span></li>`;

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
    this.SIDE_BAR_CATEGORY = Object.keys(SIDE_BAR_DETAIL);

    this.renderMain();
  }

  renderMain() {
    const firstCut = this.SIDE_BAR_CATEGORY.indexOf('전자');
    const secondCut = this.SIDE_BAR_CATEGORY.indexOf('자동차 용품');

    const topCategory = this.SIDE_BAR_CATEGORY.slice(0, firstCut);
    const bottomCategory = this.SIDE_BAR_CATEGORY.slice(firstCut, secondCut);
    const expandedCategory = this.SIDE_BAR_CATEGORY.slice(secondCut);

    const topCategoryTemplate = topCategory.reduce(makeListTemplate, '');
    const bottomCategoryTemplate = bottomCategory.reduce(makeListTemplate, '');
    const expandedCategoryTemplate = expandedCategory.reduce(makeListTemplate, '');

    const $headers = $$('.side-bar__main > .side-bar__header');

    $headers[0].insertAdjacentHTML('afterend', topCategoryTemplate);
    $headers[1].insertAdjacentHTML('afterend', bottomCategoryTemplate);
    this.$expandedCategory.insertAdjacentHTML('afterbegin', expandedCategoryTemplate);
  }

  openHandler() {
    this.$sideBar.classList.remove('translateX-left');
    this.$sideBar.classList.add('translateX-right');
    this.$closeSideBarBtn.classList.add('visible');
    this.$sideBarDimCover.classList.remove('d-none');
  }

  closeHandler() {
    this.$sideBar.classList.remove('translateX-right');
    this.$sideBar.classList.add('translateX-left');
    this.$closeSideBarBtn.classList.remove('visible');
    this.$sideBarDimCover.classList.add('d-none');
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
