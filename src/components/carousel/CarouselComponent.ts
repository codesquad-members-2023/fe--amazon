import { BaseComponent } from '../Base';
import { CarouselComponentStyle } from '../../../style/components/carousel/CarouselComponent.css';
import { CarouselContentComponent } from './CarouselContentComponent';
import { CarouselButtonComponent } from './CarouselButtonComponent';
import { FlexContainerComponent } from '../container/FlexContainerComponent';

export class CarouselComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${CarouselComponentStyle}'></section>`);
    const container = new FlexContainerComponent('row', '', '', '0');

    const carouselFileNames = [
      'amazon-beauty',
      'computer-accessory',
      'credit-card-shopping',
      'delivery-from-america',
      'for-gamer',
      'toy-game-shopping',
    ];
    carouselFileNames.forEach((fileName) => {
      const carouselContent = new CarouselContentComponent(
        this.makePath(fileName),
      );
      carouselContent.attachTo(container.element);
    });
    container.element.style.transition = `transform 1s`;

    let count = 0;
    const id = setInterval(() => {
      count++;
      container.element.style.transform = `translateX(-${count}00%)`;
      console.log(id);
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
