import { CarouselSlideMotion } from "./carouselSlideMotion.js";

export class Carousel {
  constructor(cardData){
    this.cardData = cardData;
    this.container = document.querySelector('.carousel-card__container');
    this.btnLayer = this.container.previousElementSibling;
  }

  init(){
    this.attachHTML();
    this.addEvents();
  }

  attachHTML(){
    this.container.insertAdjacentHTML('beforeend', this.generateCardNodes());
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

  addEvents(){
    const carouselSlideMotion = new CarouselSlideMotion(this.btnLayer);
    carouselSlideMotion.init();
  }
}