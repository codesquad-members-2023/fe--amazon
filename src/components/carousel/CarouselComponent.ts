import { BaseComponent } from '../Base';
import { CarouselComponentStyle } from '../../../style/components/carousel/CarouselComponent.css';
import { CarouselContentComponent } from './CarouselContentComponent';
import { CarouselButtonComponent } from './CarouselButtonComponent';
import { FlexContainerComponent } from '../container/FlexContainerComponent';
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
    container.element.ontransitionend = (e) => {
      console.log(e);
      container.element.removeAttribute('style');
      container.element.appendChild(container.element.firstElementChild!);
    };
    let temp = 1;
    setInterval(() => {
      container.element.style.transition = 'transform 1s';
      container.element.style.transform = 'translateX(-100%)';

      // console.log(id);
      // if (count === 5) {
      //   clearInterval(id);
      // }
    }, 5000);

    container.attachTo(this.element);

    const carouselLeftBtn = new CarouselButtonComponent('left');
    const carouselRightBtn = new CarouselButtonComponent('right');

    carouselRightBtn.attachTo(this.element);
    carouselLeftBtn.attachTo(this.element);
  }

  makePath = (fileName: string) => {
    return `/assets/main-carousel/background/${fileName}.jpg`;
  };
}
