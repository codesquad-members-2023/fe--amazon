import { BaseComponent } from '../Base';
import { SymbolComponent } from '../basic/SymbolComponent';
import { TextComponent } from '../basic/TextComponent';
import { SymbolTextComponentStyle } from '../../../style/components/navbar/SymbolTextComponent.css';

export class SymbolTextComponent extends BaseComponent<HTMLAnchorElement> {
  constructor(symbolPath: string, text: string, color: string = '') {
    super(`<div class='${SymbolTextComponentStyle}'></div>`);

    const symbolEl = new SymbolComponent(symbolPath);
    const textEl = new TextComponent(text, color, '', 'var(--weight-bold)');

    textEl.attachTo(this.element);
    symbolEl.attachTo(this.element);
  }
}
