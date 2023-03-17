import { BaseComponent } from '../../Base';
import { ButtonComponentStyle } from '../../../style/components/basic/ButtonComponent.css';

export class ButtonComponent extends BaseComponent<HTMLButtonElement> {
  constructor(text: string, type?: string) {
    super(
      `<button class='${ButtonComponentStyle}' type='${type}'>${text}</button>`,
    );

    if (this.element.getAttribute('type') === 'flexible') {
      this.element.style.width = '4rem';
    }
  }
}
