import { CarouselComponentStyle } from '../../../style/components/carousel/CarouselComponent.css';
import { BaseComponent } from '../Base';
import { CarouselContentComponent } from './CarouselContentComponent';
import { CarouselButtonComponent } from './CarouselButtonComponent';
import { CarouselContainer } from './CarouselContainer';

export class CarouselComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${CarouselComponentStyle}'></section>`);
    const container = new CarouselContainer();

    const carouselFileNames = [
      'amazon-beauty',
      'computer-accessory',
      'credit-card-shopping',
      'delivery-from-america',
      'for-gamer',
      'toy-game-shopping',
    ];
    container.element.style.transition = `transform 1s`;
    const carouselContentComponents = carouselFileNames.map((fileName) => {
      const carouselContent = new CarouselContentComponent(
        this.makePath(fileName),
      );
      return carouselContent;
    });
    carouselContentComponents.forEach((component) => {
      component.attachTo(container.element, 'beforeend');
    });
    let direction: 'left' | 'right' = 'right';
    container.element.addEventListener('transitionend', () => {
      container.element.removeAttribute('style');
      if (direction === 'right') {
        container.element.appendChild(container.element.firstElementChild!);
      } else {
        container.element.insertBefore(
          container.element.lastElementChild!,
          container.element.firstElementChild!,
        );
        direction = 'right';
      }
    });

    setInterval(() => {
      container.element.style.transition = 'transform 1s';
      container.element.style.transform = 'translateX(-100%)';
    }, 5000);

    container.attachTo(this.element);

    const carouselLeftBtn = new CarouselButtonComponent('left');
    const carouselRightBtn = new CarouselButtonComponent('right');
    carouselLeftBtn.element.addEventListener('click', () => {
      direction = 'left';
      container.element.style.transition = 'transform 1s';
      container.element.style.transform = 'translateX(100%)';
    });
    carouselRightBtn.element.addEventListener('click', () => {
      direction = 'right';
      container.element.style.transition = 'transform 1s';
      container.element.style.transform = 'translateX(-100%)';
    });
    carouselRightBtn.attachTo(this.element);
    carouselLeftBtn.attachTo(this.element);
  }

  makePath = (fileName: string) => {
    return `/assets/main-carousel/background/${fileName}.jpg`;
  };
}
