import { CarouselAnimationManager } from "./carouselAnimationManager.js";
import { findSiblingForward } from "../utils.js";


export class Carousel {
  constructor(cardData){
    this.cardData = cardData;
    this.carouselContainer = document.querySelector('.carousel-container');
    this.btnContainer = this.carouselContainer.querySelector('.carousel-btn__container')
    this.cardContainer = findSiblingForward(this.btnContainer, 'carousel-card__container');
    this.carouselAnimationManager = new CarouselAnimationManager(this.btnContainer);
  }

  init(){
    this.attachHTML();
    this.carouselAnimationManager.startAutoSlide();
    this.carouselAnimationManager.addClickEvt();
  }

  attachHTML(){
    this.cardContainer.insertAdjacentHTML('beforeend', this.generateCardNodes());
  }

  generateCardNodes(){
    let cards = [];
    this.cardData.forEach(({ categories }) => categories.forEach(cardName => cards.push(cardName)));
    const cardNodes = cards.reduce((acc, card) => 
      acc + `
        <li class="carousel-card ${card}">
          <img src="./asset/carousel/${card}.jpg" class="carousel-image">
        </li>
        `
    , '');
    return cardNodes;
  }
}