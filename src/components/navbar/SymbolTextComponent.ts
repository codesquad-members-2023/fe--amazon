import { BaseComponent } from '../../Base';
import { SymbolComponent } from '../basic/SymbolComponent';
import { TextComponent } from '../basic/TextComponent';
import { SymbolTextComponentStyle } from '../../../style/components/navbar/SymbolTextComponent.css';

export class SymbolTextComponent extends BaseComponent<HTMLAnchorElement> {
  constructor(symbolPath: string, text: string, link?: string) {
    super(
      `<a class='${SymbolTextComponentStyle}' href='${link ? link : ''}'></a>`,
    );

    const symbolEl = new SymbolComponent(symbolPath);
    const textEl = new TextComponent(text, '', '', 'var(--weight-bold)');

    textEl.attachTo(this.element);
    symbolEl.attachTo(this.element);
  }
}
