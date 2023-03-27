import { $, $$ } from './util/dom.js';

export default class Slide {
  #itemWidthUnit = null;

  #itemCount = null;

  #startIdx = 0;

  #slideSpeed = 300;

  #SELECTOR = {
    SLIDE: '.main-content__slide',
    BOX: '.slide-box',
    LIST: '.slide-list',
    ITEM: '.slide-item',
    PREV_BTN: '.slide-prev-btn',
    NEXT_BTN: '.slide-next-btn',
    ACTIVE: '.slide-active',
  };

  constructor() {
    this.$slide = $(this.#SELECTOR.SLIDE);
    this.$slideBox = $(this.#SELECTOR.BOX, this.$slide);
    this.$slideList = $(this.#SELECTOR.LIST, this.$slideBox);
    this.$slideItems = $$(this.#SELECTOR.ITEM, this.$slideList);

    this.currentIdx = this.#startIdx;
    this.$currentSlide = this.$slideItems[this.currentIdx];

    this.#itemCount = this.$slideItems.length;

    this.$prevBtn = $(this.#SELECTOR.PREV_BTN, this.$slide);
    this.$nextBtn = $(this.#SELECTOR.NEXT_BTN, this.$slide);

    this.renderCopyItems();
  }

  renderCopyItems() {
    const firstChild = this.$slideList.firstElementChild;
    const lastChild = this.$slideList.lastElementChild;
    const clonedFirst = firstChild.cloneNode(true);
    const clonedLast = lastChild.cloneNode(true);

    this.$slideList.insertAdjacentElement('afterbegin', clonedLast);
    this.$slideList.insertAdjacentElement('beforeend', clonedFirst);

    const totalItemCount = this.#itemCount + 2;

    this.#itemWidthUnit = 100 / totalItemCount;

    this.$slideList.style.width = `${100 * totalItemCount}%`;
    this.$slideList.style.transform = `translate3d(-${this.#itemWidthUnit}%, 0, 0)`;
    this.$currentSlide.classList.add(this.#SELECTOR.ACTIVE);
  }

  moveLeftHandler() {
    if (this.currentIdx >= 0) {
      this.$slideList.style.transition = `${this.#slideSpeed}ms`;
      this.$slideList.style.transform = `translate3d(-${
        this.#itemWidthUnit * this.currentIdx
      }%, 0, 0)`;
    }
    if (this.currentIdx === 0) {
      setTimeout(() => {
        this.$slideList.style.transition = '0ms';
        this.$slideList.style.transform = `translate3d(-${
          this.#itemWidthUnit * this.#itemCount
        }%, 0, 0)`;
      }, this.#slideSpeed);
      this.currentIdx = this.#itemCount;
    }
    this.$currentSlide.classList.remove(this.#SELECTOR.ACTIVE);
    this.currentIdx -= 1;
    this.$currentSlide = this.$slideItems[this.currentIdx];
    this.$currentSlide.classList.add(this.#SELECTOR.ACTIVE);
  }

  moveRightHandler() {
    if (this.currentIdx <= this.#itemCount - 1) {
      this.$slideList.style.transition = `${this.#slideSpeed}ms`;
      this.$slideList.style.transform = `translate3d(-${
        this.#itemWidthUnit * (this.currentIdx + 2)
      }%, 0, 0)`;
    }
    if (this.currentIdx === this.#itemCount - 1) {
      setTimeout(() => {
        this.$slideList.style.transition = '0ms';
        this.$slideList.style.transform = `translate3d(-${this.#itemWidthUnit}%, 0, 0)`;
      }, this.#slideSpeed);
      this.currentIdx = -1;
    }
    this.$currentSlide.classList.remove(this.#SELECTOR.ACTIVE);
    this.currentIdx += 1;
    this.$currentSlide = this.$slideItems[this.currentIdx];
    this.$currentSlide.classList.add(this.#SELECTOR.ACTIVE);
  }

  addEvents() {
    this.$prevBtn.addEventListener('click', this.moveLeftHandler.bind(this));
    this.$nextBtn.addEventListener('click', this.moveRightHandler.bind(this));
  }
}
