import { findSiblingForward, findUpWard } from "../nodeFindFuncs.js";

export class CarouselAnimationManager {
  constructor(btnLayer){
    this.btnLayer = btnLayer;
    [this.leftBtn, this.rightBtn] = [...this.btnLayer.childNodes].filter(node => node.nodeName != '#text');
    this.cardLayer = findSiblingForward(this.btnLayer, 'carousel-card__container');
    this.TRANSITION_DURATION = 1000;
    this.AUTO_SLIDE_DURATION = 10000;
  }

  startAutoSlide(){
    this.start = null;
    this.raf = requestAnimationFrame((timestamp) => this.slideRight(timestamp));
  }

  slideRight(timestamp){
    if(this.start === null) this.start = timestamp;
    const time = timestamp - this.start;
    if(time > 5000){
      this.cardLayer.style.transitionTimingFunction = 'ease-in-out';
      this.cardLayer.style.transitionDuration = `${this.TRANSITION_DURATION}ms`;
      this.cardLayer.style.transform = `translateX(-100vw)`;
      this.cardLayer.ontransitionend = () => this.manipulateChildNodes();
      cancelAnimationFrame(this.raf);
      this.start = timestamp;
      requestAnimationFrame(this.slideRight.bind(this));
    }
    requestAnimationFrame(this.slideRight.bind(this));
  }

  addClickEvt(){
    this.leftBtn.addEventListener('click', () => {
      this.cardLayer.style.transitionTimingFunction = 'ease-in-out';
      this.cardLayer.style.transitionDuration = `${this.TRANSITION_DURATION}ms`;
      this.cardLayer.style.transform = `translateX(-100vw)`;
      this.cardLayer.ontransitionend = () => this.manipulateChildNodes();
    })

    this.rightBtn.addEventListener('click', () => {
      const DIRECTION = 'Right'
      this.cardLayer.style.transitionTimingFunction = 'ease-in-out';
      this.cardLayer.style.transitionDuration = `${this.TRANSITION_DURATION}ms`;
      this.cardLayer.style.transform = `translateX(100vw)`;
      this.cardLayer.ontransitionend = () => this.manipulateChildNodes(DIRECTION);
    })

    document.addEventListener('click', ({ target }) => {
      if(this.leftBtn.contains(target)) {
        this.leftBtn.classList.add('carousel-border');
        this.rightBtn.classList.remove('carousel-border');
      } else if(this.rightBtn.contains(target)){
        this.rightBtn.classList.add('carousel-border');
        this.leftBtn.classList.remove('carousel-border');
      } else {
        this.rightBtn.classList.remove('carousel-border');
        this.leftBtn.classList.remove('carousel-border')
      }
    })
  }

  manipulateChildNodes(DIRECTION){
    this.cardLayer.removeAttribute('style');
    return DIRECTION === 'Right'
            ? this.cardLayer.insertBefore(this.cardLayer.lastElementChild, this.cardLayer.firstElementChild)
            : this.cardLayer.appendChild(this.cardLayer.firstElementChild);
  }
}