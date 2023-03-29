import { BaseComponent } from '../Base';
import { CarouselButtonComponentStyle } from '../../../style/components/carousel/CarouselButtonComponent.css';
import { SymbolComponent } from '../basic/SymbolComponent';

export class CarouselButtonComponent extends BaseComponent<HTMLElement> {
  constructor(direction: 'left' | 'right') {
    super(`<button class='${CarouselButtonComponentStyle}'></button>`);
    const buttonSymbolComponent = new SymbolComponent(
      `/assets/main-carousel/${direction}-button.svg`,
      'transparent',
    );
    buttonSymbolComponent.setStyles({
      display: 'block',
      margin: 'auto',
      width: '1.5rem',
      height: '100%',
    });

    if (direction === 'left') {
      this.setStyles({ left: '0' });
    } else {
      this.setStyles({ right: '0' });
    }
    buttonSymbolComponent.attachTo(this.element);
  }
}
