import { $, $$ } from './util/dom.js';
import { SIDE_BAR_DETAIL } from './data/sideBarDetail.js';

const makeListTemplate =
  ({ startIdx }) =>
  (template, category, idx) => {
    const dataId = startIdx + idx;
    return (
      template +
      String.raw`
      <li data-category-id="${dataId}">${category}<span class="right-arrow-icon"></span></li>`
    );
  };

export default class SideBar {
  constructor() {
    this.$sideBar = $('.side-bar');
    this.$sideBarBtn = $('.side-bar-btn');
    this.$closeSideBarBtn = $('.side-bar__close-btn', this.$sideBar);

    this.$sideBarContent = $('.side-bar__content', this.$sideBar);

    this.$sideBarMain = $('.side-bar__main', this.$sideBarContent);
    this.$showAllBtn = $('#show-all-btn', this.$sideBarMain);
    this.$expandedCategory = $('.expanded-category', this.$sideBarMain);
    this.$showLessBtn = $('#show-less-btn', this.$sideBarMain);

    this.$sideBarDimCover = $('.dim-cover__in-sideBar');
    // * private도 고려해보기
    this.SIDE_BAR_CATEGORY = Object.keys(SIDE_BAR_DETAIL);

    this.renderInitMain();
    this.renderDetail();

    this.$detailCategories = $$('.detail-category', this.$sideBarContent);
    this.clickedCategoryId = null;
  }

  renderInitMain() {
    const firstCut = this.SIDE_BAR_CATEGORY.indexOf('전자');
    const secondCut = this.SIDE_BAR_CATEGORY.indexOf('자동차 용품');

    const topCategory = this.SIDE_BAR_CATEGORY.slice(0, firstCut);
    const bottomCategory = this.SIDE_BAR_CATEGORY.slice(firstCut, secondCut);
    const expandedCategory = this.SIDE_BAR_CATEGORY.slice(secondCut);

    const topCategoryTemplate = topCategory.reduce(makeListTemplate({ startIdx: 0 }), '');
    const bottomCategoryTemplate = bottomCategory.reduce(
      makeListTemplate({ startIdx: firstCut }),
      ''
    );
    const expandedCategoryTemplate = expandedCategory.reduce(
      makeListTemplate({ startIdx: secondCut }),
      ''
    );

    const $headers = $$('.side-bar__main > .side-bar__header');

    $headers[0].insertAdjacentHTML('afterend', topCategoryTemplate);
    $headers[1].insertAdjacentHTML('afterend', bottomCategoryTemplate);
    this.$expandedCategory.insertAdjacentHTML('afterbegin', expandedCategoryTemplate);
  }

  renderDetail() {
    const returnTemplate = String.raw`<li id="main-category-return-btn"><span class="left-arrow-icon"></span>주메뉴</li>`;
    const getHeaderTemplate = (mainCategory) =>
      String.raw`<header class="side-bar__header">${mainCategory}</header>`;
    const getListTemplate = (mainCategory) =>
      SIDE_BAR_DETAIL[mainCategory].reduce(
        (template, detailCategory) => template + String.raw`<li>${detailCategory}</li>`,
        ''
      );

    const detailTemplate = this.SIDE_BAR_CATEGORY.reduce(
      (template, mainCategory) =>
        template +
        String.raw`
          <ul class="detail-category">
            ${returnTemplate}
            ${getHeaderTemplate(mainCategory)}
            ${getListTemplate(mainCategory)}
          </ul>
        `,
      ''
    );

    this.$sideBarContent.insertAdjacentHTML('beforeend', detailTemplate);
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

  showDetail({ dataset }) {
    this.clickedCategoryId = dataset.categoryId;

    this.$sideBarMain.classList.add('translateX-left');
    this.$detailCategories[this.clickedCategoryId].classList.add('translateX-left');
    this.$detailCategories[this.clickedCategoryId].classList.add('visible');
  }

  returnMain(target) {
    const detailCategory = target.closest('ul.detail-category');

    this.$sideBarMain.classList.remove('translateX-left');
    detailCategory.classList.remove('translateX-left');
    detailCategory.classList.remove('visible');
  }

  isMainCategory({ dataset }) {
    return dataset.categoryId;
  }

  addEvents() {
    this.$sideBarBtn.addEventListener('click', this.openHandler.bind(this));
    this.$closeSideBarBtn.addEventListener('click', this.closeHandler.bind(this));
    this.$sideBarDimCover.addEventListener('click', this.closeHandler.bind(this));

    this.$sideBarContent.addEventListener('click', ({ target }) => {
      if (target.id === 'show-all-btn') this.showAll();
      if (target.id === 'show-less-btn') this.showLess();

      if (target.id === 'main-category-return-btn') {
        this.returnMain(target);
        return;
      }

      if (!this.isMainCategory(target)) return;

      this.showDetail(target);
    });
  }
}
