import { BaseComponent } from './components/Base';
import { CarouselComponent } from './components/carousel/CarouselComponent';

export class Main extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<main></main>`);

    const carouselComponent = new CarouselComponent();
    carouselComponent.attachTo(this.element);
  }
}
