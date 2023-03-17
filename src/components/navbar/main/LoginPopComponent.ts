import { BaseComponent } from '../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { ButtonComponent } from '../../basic/ButtonComponent';
import { LoginPopComponentStyle } from '../../../../style/components/navbar/main/LoginPopComponent.css';
import { FlexContainerComponent } from '../../basic/FlexContainerComponent';

export class LoginPopComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${LoginPopComponentStyle}'></section>`);

    const loginBtn = new ButtonComponent('로그인');

    const loginTextContainer = new FlexContainerComponent('', 'center');

    const textFirst = new TextComponent(
      '기존 사용자가 아니십니까?',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const textSecond = new TextComponent(
      '여기에서 시작합니다.',
      'var(--color-navy)',
      'var(--font-sm)',
    );
    textSecond.attachTo(loginTextContainer.element);
    textFirst.attachTo(loginTextContainer.element);
    loginTextContainer.attachTo(this.element);
    loginBtn.attachTo(this.element);
  }
}
