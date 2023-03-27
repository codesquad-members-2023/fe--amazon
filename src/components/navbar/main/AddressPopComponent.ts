import { BaseComponent } from '../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { ButtonComponent } from '../../basic/ButtonComponent';
import { FlexContainerComponent } from '../../container/FlexContainerComponent';
import { AddressPopComponentStyle } from '../../../../style/components/navbar/main/AddressPopComponent.css';

export class AddressPopComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${AddressPopComponentStyle}'></section>`);
    this.makeContent();
  }

  makeContent() {
    const addressTextComponent = new TextComponent(
      'UN으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.',
      'var(--color-black)',
      'var(--font-sm)',
    );

    const addressButtonContainerComponent = new FlexContainerComponent(
      'row',
      'flex-end',
      '',
      '1rem',
    );

    const continueButtonComponent = new ButtonComponent('계속', 'flexible');
    const changeAddressButtonComponent = new ButtonComponent(
      '주소 변경',
      'flexible',
    );

    changeAddressButtonComponent.attachTo(
      addressButtonContainerComponent.element,
    );
    continueButtonComponent.attachTo(addressButtonContainerComponent.element);
    addressButtonContainerComponent.attachTo(this.element);
    addressTextComponent.attachTo(this.element);
  }
}
