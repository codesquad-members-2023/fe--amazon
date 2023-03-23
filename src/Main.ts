import { BaseComponent } from './components/Base';

export class Main extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<main></main>`);
  }
}
