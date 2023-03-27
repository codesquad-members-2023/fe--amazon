import { $, $$ } from './util/dom.js';

export default class Slide {
  #itemWidthUnit = null;

  #itemCount = null;

  #startIdx = 0;

  constructor() {
    this.$slide = $('.main-content__slide');
    this.$slideBox = $('.slide-box', this.$slide);
    this.$slideList = $('.slide-list', this.$slideBox);
    this.$slideItems = $$('.slide-item', this.$slideList);

    this.currentIdx = this.#startIdx;
    this.$currentSlide = this.$slideItems[this.currentIdx];

    this.#itemCount = this.$slideItems.length;

    this.$prevBtn = $('.slide-prev-btn', this.$slide);
    this.$nextBtn = $('.slide-next-btn', this.$slide);

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
    this.$currentSlide.classList.add('slide-active');
  }

  addEvents() {
    this.$nextBtn.addEventListener('click', () => {
      if (this.currentIdx <= this.#itemCount - 1) {
        this.$slideList.style.transition = '300ms';
        this.$slideList.style.transform = `translate3d(-${
          this.#itemWidthUnit * (this.currentIdx + 2)
        }%, 0, 0)`;
      }
      if (this.currentIdx === this.#itemCount - 1) {
        setTimeout(() => {
          this.$slideList.style.transition = '0ms';
          this.$slideList.style.transform = `translate3d(-${this.#itemWidthUnit}%, 0, 0)`;
        }, 300);
        this.currentIdx = -1;
      }
      this.$currentSlide.classList.remove('slide-active');
      this.currentIdx += 1;
      this.$currentSlide = this.$slideItems[this.currentIdx];
      this.$currentSlide.classList.add('slide-active');
    });
  }
}
