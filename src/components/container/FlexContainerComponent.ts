import { BaseComponent } from '../Base';
import { FlexContainerComponentStyle } from '../../../style/components/container/FlexContainerComponent.css';

export class FlexContainerComponent extends BaseComponent<HTMLElement> {
  constructor(
    flexDirection: string = '',
    justifyContent: string = '',
    alignItems: string = '',
    gap: string = '',
  ) {
    super(`<div class='${FlexContainerComponentStyle}'></div>`);
    this.setStyles({ flexDirection, justifyContent, alignItems, gap });
  }
}
