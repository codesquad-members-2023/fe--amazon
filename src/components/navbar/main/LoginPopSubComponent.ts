import { BaseComponent } from '../../Base';
import { TextComponent } from '../../basic/TextComponent';
import { ButtonComponent } from '../../basic/ButtonComponent';
import { FlexContainerComponent } from '../../container/FlexContainerComponent';
import { LoginPopSubComponentStyle } from '../../../../style/components/navbar/main/LoginPopSubComponent.css';

export class LoginPopSubComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<section class='${LoginPopSubComponentStyle}'></section>`);

    const leftContainer = new FlexContainerComponent(
      'column',
      'flex-start',
      '',
      '.5rem',
    );
    leftContainer.element.style.height = '100%';
    const leftTitle = new TextComponent(
      '귀하의 목록',
      'var(--color-black)',
      'var(--font-sm)',
      'var(--weight-bold)',
    );
    const leftFirst = new TextComponent(
      '목록 생성',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const leftSecond = new TextComponent(
      '목록 또는 레지스트리 찾기',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const leftThird = new TextComponent(
      'AmazonSmile 자선 품목 목록',
      'var(--color-black)',
      'var(--font-sm)',
    );

    const rightContainer = new FlexContainerComponent(
      'column',
      'flex-start',
      '',
      '.5rem',
    );
    rightContainer.element.style.height = '100%';
    const rightTitle = new TextComponent(
      '계정',
      'var(--color-black)',
      'var(--font-sm)',
      'var(--weight-bold)',
    );
    const rightFirst = new TextComponent(
      '계정',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightSecond = new TextComponent(
      '주문',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightThird = new TextComponent(
      '권장 사항',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightFourth = new TextComponent(
      '검색 기록',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightFifth = new TextComponent(
      '위시리스트',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightSixth = new TextComponent(
      '비디오 구매 및 대여',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightSeventh = new TextComponent(
      'Kindle 언리미티드',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightEighth = new TextComponent(
      '콘텐츠 및 기기',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightNinth = new TextComponent(
      '항목 구독 및 저장',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightTenth = new TextComponent(
      '멤버십 및 구독',
      'var(--color-black)',
      'var(--font-sm)',
    );
    const rightEleventh = new TextComponent(
      '음악 라이브러리',
      'var(--color-black)',
      'var(--font-sm)',
    );

    [leftThird, leftSecond, leftFirst, leftTitle].forEach((el) =>
      el.attachTo(leftContainer.element),
    );
    [
      rightEleventh,
      rightTenth,
      rightNinth,
      rightEighth,
      rightSeventh,
      rightSixth,
      rightFifth,
      rightFourth,
      rightThird,
      rightSecond,
      rightFirst,
      rightTitle,
    ].forEach((el) => el.attachTo(rightContainer.element));

    [rightContainer, leftContainer].forEach((el) => el.attachTo(this.element));
  }
}
