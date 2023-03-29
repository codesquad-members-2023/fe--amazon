import { BaseComponent } from '../Base';
import { ImageComponentStyle } from '../../../style/components/basic/ImageComponent.css';

export class ImageComponent extends BaseComponent<HTMLImageElement> {
  constructor(path: string, width: string, height: string) {
    super(`<img class='${ImageComponentStyle}' src='${path}' />`);
    this.setStyles({ width, height });
  }
}
