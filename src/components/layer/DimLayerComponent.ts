import { BaseComponent } from '../Base';
import { DimLayerStyle } from '../../../style/components/layers/DimLayerComponent.css';

export class DimLayerComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div class='${DimLayerStyle}'></div>`);
  }

  on() {
    this.element.style.display = 'block';
  }

  off() {
    this.element.style.display = 'none';
  }
}
