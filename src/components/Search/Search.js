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
    this.clearChildren();
    const empty = document.createElement('div');
    empty.innerText = '검색어를 입력해주세요.';
    this.div.appendChild(empty);
  }

  clearChildren() {
    this.div.innerHTML = '';
  }

  showEmpty() {
    const div = this.shadowRoot.querySelector('div');
    const empty = document.createElement('');
    li.innerText = '검색 결과가 없습니다.';
    ul.appendChild(li);
  }

  showAction(eventTarget) {
    eventTarget.shadowRoot.append(this);
    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);
  }

  closeAction() {
    this.remove();
    this.backdrop.remove();
  }

  runSearch(s = '', page = 1) {
    getSearchDataAPI(s, page).then((datas) => {
      this.clearChildren();
      console.log({ s, datas });
      this.renderSearchList(datas);
    });
  }

  renderSearchList(datas) {
    const ul = document.createElement('ul');
    datas.forEach((data) => {
      const li = document.createElement('li');
      li.innerText = data.title;
      ul.appendChild(li);
    });
    this.div.append(ul);
  }
}

export default Search;
