import { CSSProperties } from '@vanilla-extract/css';

export interface Base {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}
export class BaseComponent<T extends HTMLElement> implements Base {
  private _element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this._element = template.content.firstElementChild! as T;
  }

  get element() {
    return this._element;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this._element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this._element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this._element);
  }

  setStyles(stylesObject: Record<string, string>) {
    for (const [key, value] of Object.entries(stylesObject)) {
      this._element.style[key as any] = value;
    }
  }

  setEventListener(event: string, fn: () => void) {
    this._element.addEventListener(event, fn);
  }
}
