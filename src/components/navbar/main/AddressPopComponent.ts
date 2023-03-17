import { BaseComponent } from '../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { ButtonComponent } from '../../basic/ButtonComponent';
import { FlexContainerComponent } from '../../container/FlexContainerComponent';
import { AddressPopComponentStyle } from '../../../../style/components/navbar/main/AddressPopComponent.css';

export class AddressPopComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${AddressPopComponentStyle}'></section>`);

    const addressText = new TextComponent(
      'UN으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.',
      'var(--color-black)',
      'var(--font-sm)',
    );

    const addressBtnContainer = new FlexContainerComponent(
      'row',
      'flex-end',
      '',
      '1rem',
    );

    const continueBtn = new ButtonComponent('계속', 'flexible');
    const changeAddressBtn = new ButtonComponent('주소 변경', 'flexible');
    changeAddressBtn.attachTo(addressBtnContainer.element);
    continueBtn.attachTo(addressBtnContainer.element);

    addressBtnContainer.attachTo(this.element);
    addressText.attachTo(this.element);
  }
}
