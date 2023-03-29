import { BaseComponent } from '../Base';
import { TextComponentStyle } from '../../../style/components/basic/TextComponent.css';

export class TextComponent extends BaseComponent<HTMLSpanElement> {
  constructor(
    text: string,
    color: string = '',
    fontSize: string = '',
    fontWeight: string = '',
  ) {
    super(`<span class='${TextComponentStyle}'>${text}</span>`);
    this.setStyles({ color, fontSize, fontWeight });
  }
}
