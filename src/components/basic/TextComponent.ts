import { BaseComponent } from '../../Base';
import { TextComponentStyle } from '../../../style/components/basic/TextComponent.css';

export class TextComponent extends BaseComponent<HTMLSpanElement> {
  constructor(
    text: string,
    color: string = '',
    fontSize: string = '',
    fontWeight: string = '',
  ) {
    super(`<span class='${TextComponentStyle}'>${text}</span>`);
    this.element.style.color = color;
    this.element.style.fontSize = fontSize;
    this.element.style.fontWeight = fontWeight;
  }
}
