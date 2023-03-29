import { CarouselComponentStyle } from '../../../style/components/carousel/CarouselComponent.css';
import { BaseComponent } from '../Base';
import { CarouselContentComponent } from './CarouselContentComponent';
import { CarouselButtonComponent } from './CarouselButtonComponent';
import { CarouselContainer } from './CarouselContainer';

export class CarouselComponent extends BaseComponent<HTMLElement> {
  private fileNames = [
    'amazon-beauty',
    'computer-accessory',
    'credit-card-shopping',
    'delivery-from-america',
    'for-gamer',
    'toy-game-shopping',
  ];
  constructor() {
    super(`<section class='${CarouselComponentStyle}'></section>`);
    const containerComponent = new CarouselContainer();
    containerComponent.setStyles({ transition: 'transform 1s' });
    const carouselContentComponents = this.fileNames.map((fileName) => {
      const carouselContent = new CarouselContentComponent(
        this.makePath(fileName),
      );
      return carouselContent;
    });
    carouselContentComponents.forEach((component) => {
      component.attachTo(containerComponent.element, 'beforeend');
    });
    let direction: 'left' | 'right' = 'right';
    containerComponent.element.addEventListener('transitionend', () => {
      containerComponent.element.removeAttribute('style');
      if (direction === 'right') {
        containerComponent.element.appendChild(
          containerComponent.element.firstElementChild!,
        );
      } else {
        containerComponent.element.insertBefore(
          containerComponent.element.lastElementChild!,
          containerComponent.element.firstElementChild!,
        );
        direction = 'right';
      }
    });

    setInterval(() => {
      containerComponent.setStyles({
        transition: 'transform 1s',
        transform: 'translateX(-100%)',
      });
    }, 5000);

    containerComponent.attachTo(this.element);

    const carouselLeftButtonComponent = new CarouselButtonComponent('left');
    const carouselRightButtonComponent = new CarouselButtonComponent('right');
    carouselLeftButtonComponent.element.addEventListener('click', () => {
      direction = 'left';
      containerComponent.setStyles({
        transition: 'transform 1s',
        transform: 'translateX(100%)',
      });
    });
    carouselRightButtonComponent.element.addEventListener('click', () => {
      direction = 'right';
      containerComponent.setStyles({
        transition: 'transform 1s',
        transform: 'translateX(-100%)',
      });
    });
    carouselRightButtonComponent.attachTo(this.element);
    carouselLeftButtonComponent.attachTo(this.element);
  }

  makePath = (fileName: string) => {
    return `/assets/main-carousel/background/${fileName}.jpg`;
  };
}
