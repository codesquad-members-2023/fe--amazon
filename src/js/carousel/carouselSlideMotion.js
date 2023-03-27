import { findSiblingForward } from "../nodeFindFuncs.js";

export class CarouselSlideMotion {
  constructor(btnLayer){
    this.btnLayer = btnLayer;
    [this.leftBtn, this.rightBtn] = [...this.btnLayer.childNodes].filter(node => node.nodeName != '#text');
    this.cardLayer = findSiblingForward(this.btnLayer, 'carousel-card__container');
    this.DURATION_TIME = 2;
    this.AUTO_SLIDE_DURATION = 5000;
  }

  init(){
    this.startAutoSlide();
    this.addClickEvt();
  }

  startAutoSlide(){
    setInterval(() => {
      this.cardLayer.style.transitionTimingFunction = 'ease-in-out';
      this.cardLayer.style.transitionDuration = `${this.DURATION_TIME}s`;
      this.cardLayer.style.transform = `translateX(-100vw)`;
      this.cardLayer.ontransitionend = () => this.whenTransitionEnd();
    }, this.AUTO_SLIDE_DURATION);
  }

  addClickEvt(){
    this.leftBtn.addEventListener('click', () => {
      this.cardLayer.style.transitionTimingFunction = 'ease-in-out';
      this.cardLayer.style.transitionDuration = `${this.DURATION_TIME}s`;
      this.cardLayer.style.transform = `translateX(-100vw)`;
      this.cardLayer.ontransitionend = () => this.whenTransitionEnd();
    })

    this.rightBtn.addEventListener('click', () => {
      const DIRECTION = 'Right'
      this.cardLayer.style.transitionTimingFunction = 'ease-in-out';
      this.cardLayer.style.transitionDuration = `${this.DURATION_TIME}s`;
      this.cardLayer.style.transform = `translateX(100vw)`;
      this.cardLayer.ontransitionend = () => this.whenTransitionEnd(DIRECTION);
    })
  }

  whenTransitionEnd(DIRECTION){
    this.cardLayer.removeAttribute('style');
    return DIRECTION === 'Right'
            ? this.cardLayer.insertBefore(this.cardLayer.lastElementChild, this.cardLayer.firstElementChild)
            : this.cardLayer.appendChild(this.cardLayer.firstElementChild);
  }
}