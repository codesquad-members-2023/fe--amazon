import { BaseComponent } from '../Base';
import { CarouselContainerStyle } from '../../../style/components/carousel/CarouselContainer.css';

export class CarouselContainer extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${CarouselContainerStyle}'></section>`);
  }
}
