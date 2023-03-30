import { $, $$ } from './util/dom.js';

export default class Slide {
  #itemCount = null;

  #startIdx = 1;

  #currentIdx = null;

  #SLIDE_SPEED = 700;

  #SELECTOR = {
    SLIDE: '.main-content__slide',
    BOX: '.slide-box',
    LIST: '.slide-list',
    ITEM: '.slide-item',
    PREV_BTN: '.slide-prev-btn',
    NEXT_BTN: '.slide-next-btn',
  };

  #CLONED_ID = {
    FIRST: 'cloned-first',
    LAST: 'cloned-last',
  };

  #INTERVAL_TIME = 10000;

  constructor() {
    this.$slide = $(this.#SELECTOR.SLIDE);
    this.$slideBox = $(this.#SELECTOR.BOX, this.$slide);
    this.$slideList = $(this.#SELECTOR.LIST, this.$slideBox);
    this.$slideItems = $$(this.#SELECTOR.ITEM, this.$slideList);

    this.#currentIdx = this.#startIdx;

    this.#itemCount = this.$slideItems.length;

    this.$prevBtn = $(this.#SELECTOR.PREV_BTN, this.$slide);
    this.$nextBtn = $(this.#SELECTOR.NEXT_BTN, this.$slide);

    this.renderCopyItems();

    this.startTime = null;
    this.setAutoSlideMoving();
  }

  setSlideItems() {
    this.$slideItems = $$(this.#SELECTOR.ITEM, this.$slideList);
  }

  setItemCount() {
    this.#itemCount = this.$slideItems.length;
  }

  setAutoSlideMoving() {
    const moveAuto = (timestamp) => {
      if (!this.startTime) this.startTime = timestamp;
      const progress = timestamp - this.startTime;
      if (progress >= this.#INTERVAL_TIME) {
        this.moveRightHandler();
        this.startTime = null;
      }
      requestAnimationFrame(moveAuto);
    };

    requestAnimationFrame(moveAuto);
  }

  moveSlide({ isTransition = false, idx }) {
    this.$slideList.style.transform = `translate3d(-${100 * idx}%, 0, 0)`;
    this.$slideList.style.transition = isTransition ? `${this.#SLIDE_SPEED}ms` : 'none';
  }

  renderCopyItems() {
    const firstChild = this.$slideList.firstElementChild;
    const lastChild = this.$slideList.lastElementChild;
    const clonedFirst = firstChild.cloneNode(true);
    const clonedLast = lastChild.cloneNode(true);

    clonedFirst.id = this.#CLONED_ID.FIRST;
    clonedLast.id = this.#CLONED_ID.LAST;

    this.$slideList.insertAdjacentElement('afterbegin', clonedLast);
    this.$slideList.insertAdjacentElement('beforeend', clonedFirst);

    this.setSlideItems();
    this.setItemCount();

    this.moveSlide({ idx: this.#currentIdx });
  }

  moveLeftHandler() {
    if (this.#currentIdx <= 0) return;
    this.startTime = null;
    this.#currentIdx -= 1;
    this.moveSlide({ isTransition: true, idx: this.#currentIdx });
  }

  moveRightHandler() {
    if (this.#currentIdx >= this.#itemCount - 1) return;
    this.startTime = null;
    this.#currentIdx += 1;
    this.moveSlide({ isTransition: true, idx: this.#currentIdx });
  }

  transitionEndHandler() {
    const currentSlide = this.$slideItems[this.#currentIdx];
    const clonedIds = Object.values(this.#CLONED_ID);

    if (!clonedIds.includes(currentSlide.id)) return;

    if (currentSlide.id === this.#CLONED_ID.LAST) {
      this.#currentIdx = this.#itemCount - 2;
    }
    if (currentSlide.id === this.#CLONED_ID.FIRST) {
      this.#currentIdx = this.#startIdx;
    }
    this.moveSlide({ isTransition: false, idx: this.#currentIdx });
  }

  addEvents() {
    this.$slideList.addEventListener('transitionend', this.transitionEndHandler.bind(this));
    this.$prevBtn.addEventListener('click', this.moveLeftHandler.bind(this));
    this.$nextBtn.addEventListener('click', this.moveRightHandler.bind(this));
  }
}
