import { BaseComponent } from '../Base';
import { CarouselButtonComponentStyle } from '../../../style/components/carousel/CarouselButtonComponent.css';
import { ButtonComponent } from '../basic/ButtonComponent';
import { SymbolComponent } from '../basic/SymbolComponent';

export class CarouselButtonComponent extends BaseComponent<HTMLElement> {
  constructor(direction: 'left' | 'right') {
    super(`<div class='${CarouselButtonComponentStyle}'></div>`);
    const buttonSymbol = new SymbolComponent(
      `/assets/main-carousel/${direction}-button.svg`,
      'transparent',
    );
    buttonSymbol.element.style.display = 'block';
    buttonSymbol.element.style.margin = 'auto';
    buttonSymbol.element.style.width = '1.5rem';
    buttonSymbol.element.style.height = '100%';

    if (direction === 'left') {
      this.element.style.left = '0';
    } else {
      this.element.style.right = '0';
    }
    buttonSymbol.attachTo(this.element);
  }
}
