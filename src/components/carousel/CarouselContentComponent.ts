import { BaseComponent } from '../Base';
import { CarouselContentComponentStyle } from '../../../style/components/carousel/CarouselContentComponent.css';

export class CarouselContentComponent extends BaseComponent<HTMLElement> {
  constructor(path: string) {
    super(`<img class='${CarouselContentComponentStyle}' src='${path}'/>`);
  }
}
