import { BaseComponent } from './components/Base';
import { CarouselComponent } from './components/carousel/CarouselComponent';

export class Main extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<main></main>`);

    const carousel = new CarouselComponent();
    carousel.attachTo(this.element);
  }
}
