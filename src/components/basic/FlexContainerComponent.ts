import { BaseComponent } from '../Base';
import { FlexContainerComponentStyle } from '../../../style/components/basic/FlexContainerComponent.css';

export class FlexContainerComponent extends BaseComponent<HTMLElement> {
  constructor(
    flexDirection: string = '',
    justifyContent: string = '',
    alignItems: string = '',
  ) {
    super(`<div class='${FlexContainerComponentStyle}'></div>`);
    this.element.style.flexDirection = flexDirection;
    this.element.style.justifyContent = justifyContent;
    this.element.style.alignItems = alignItems;
  }
}
