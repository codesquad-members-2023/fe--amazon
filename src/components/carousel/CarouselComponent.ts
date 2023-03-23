import { BaseComponent } from '../Base';
import { CarouselComponentStyle } from '../../../style/components/carousel/CarouselComponent.css';

export class CarouselComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${CarouselComponentStyle}'></section>`);
  }
}
