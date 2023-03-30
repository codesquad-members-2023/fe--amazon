import searchStyle from './searchStyle.js';
import { getSearchDataAPI } from '@apis/search.js';

class Search extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });
    this.searchList = this.getAttribute('data-search-list');
    const style = this.getAttribute('style');
    this.div = document.createElement('div');
    shadow.append(this.div);
    this.showDefaultSearch();
    this.shadowRoot.append(searchStyle.call(this));
  }

  showDefaultSearch() {
    const empty = document.createElement('div');
    empty.classList.add('empty');
    empty.innerText = '검색어를 입력해주세요.';
    this.clearChildren();
    this.div.appendChild(empty);
  }

  clearChildren() {
    this.div.innerHTML = '';
  }

  showEmpty() {
    this.clearChildren();
  }

  showAction(eventTarget) {
    eventTarget.shadowRoot.append(this);
    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);
  }

  closeAction() {
    this.remove();
  }

  runSearch(s = '', page = 1) {
    getSearchDataAPI(s, page).then((datas) => {
      if (datas.length === 0) return this.showEmpty();
      this.clearChildren();
      this.renderSearchList({ s, datas });
    });
  }

  highlightText({ s, text }) {
    const regex = new RegExp(s, 'gi');
    return text.replace(regex, `<span class="highlight">${s}</span>`);
  }

  renderSearchList({ s, datas }) {
    const ul = document.createElement('ul');
    datas.forEach((data) => {
      const li = document.createElement('li');
      const text = data.title;
      li.innerHTML = this.highlightText({ s, text });
      ul.appendChild(li);
    });
    this.div.append(ul);
  }
}

export default Search;
