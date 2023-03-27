import searchStyle from './searchStyle.js';
import { getSearchData } from '@apis/search.js';

class Search extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });
    const style = this.getAttribute('style');
    shadow.innerHTML = `<ul></ul>`;

    this.shadowRoot.append(searchStyle.call(this));
    this.getData();
  }

  getData() {
    getSearchData('s', 1).then((datas) => {
      const ul = this.shadowRoot.querySelector('ul');
      datas.forEach((data) => {
        const li = document.createElement('li');
        li.innerText = data.title;
        ul.appendChild(li);
      });
    });
  }
}

export default Search;
