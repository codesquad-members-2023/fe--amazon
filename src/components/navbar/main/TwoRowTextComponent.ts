import { BaseComponent } from '../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { TwoRowTextComponentStyle } from '../../../../style/components/navbar/main/TwoRowTextComponent.css';

export class TwoRowTextComponent extends BaseComponent<HTMLAnchorElement> {
  constructor(firstText: string, secondText: string) {
    super(`<div class='${TwoRowTextComponentStyle}'></div>`);

    const firstRow = new TextComponent(
      firstText,
      'var(--color-gray-400)',
      'var(--font-sm)',
      'var(--weight-semi-bold)',
    );
    const secondRow = new TextComponent(
      secondText,
      '',
      '',
      'var(--weight-bold)',
    );

    secondRow.attachTo(this.element);
    firstRow.attachTo(this.element);
  }
}
