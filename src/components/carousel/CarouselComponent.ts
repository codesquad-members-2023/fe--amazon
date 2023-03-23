import { BaseComponent } from '../Base';
import { CarouselComponentStyle } from '../../../style/components/carousel/CarouselComponent.css';
import { CarouselContentComponent } from './CarouselContentComponent';

export class CarouselComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${CarouselComponentStyle}'></section>`);

    const carouselTest = new CarouselContentComponent(
      '/assets/main-carousel/background/for-gamer.jpg',
    );
    carouselTest.attachTo(this.element);
  }
}
