import fs from 'fs';

export class Carousel {
  constructor(){
    this.container = document.querySelector('.carousel__container');
  }

  init(){
    this.attachHTML();
  }
  
  generateLayer(){
    return `
      <li class="carousel__card">
        <img src="./asset/carousel/beauty.jpg" class="carousel__image">
      </li>
      <li class="carousel__card">
        <img src="./asset/carousel/card.jpg" class="carousel__image">
      </li>
      <li class="carousel__card">
        <img src="./asset/carousel/computer.jpg" class="carousel__image">
      </li>
      <li class="carousel__card">
        <img src="./asset/carousel/game.jpg" class="carousel__image">
      </li>
      <li class="carousel__card">
        <img src="./asset/carousel/shipping.jpg" class="carousel__image">
      </li>
      <li class="carousel__card">
        <img src="./asset/carousel/toysandgame.jpg" class="carousel__image">
      </li>
    `
  }

  attachHTML(){
    this.container.innerHTML = this.generateLayer();
  }



}