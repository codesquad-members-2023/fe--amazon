import searchStyle from './searchStyle.js';
import { getSearchDataAPI, getSearchRecommendItemsAPI } from '@apis/search.js';

class Search extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.searchList = this.getAttribute('data-search-list');
    this.div = document.createElement('div');
    this.div.classList.add('search-list-container');
    shadow.append(this.div);
    this.shadowRoot.append(searchStyle.call(this));
  }

  showAction(eventTarget) {
    this.showDefaultSearch();
    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);
    eventTarget.shadowRoot.append(this);
  }

  closeAction() {
    this.remove();
    this.backdrop.remove();
  }

  removeChildren() {
    this.div.innerHTML = '';
  }

  showDefaultSearch() {
    this.removeChildren();
    this.loadRecommendItems();
    this.loadHistories();
    document.addEventListener('search-recommend-list-rendered', () => {
      this.shadowRoot
        .querySelector('.search-list-container')
        .classList.add('show');
    });
  }

  loadRecommendItems() {
    getSearchRecommendItemsAPI(5).then((datas) => {
      this.renderSearchList({ s: '', datas, type: 'recommend' });
    });
  }

  loadHistories() {
    const histories = JSON.parse(
      localStorage.getItem('search-histories')
    ).reverse();
    if (!histories) return;
    this.renderSearchList({ s: '', datas: histories, type: 'history' });
  }

  renderSearchList({ s, datas, type = 'search-result' }) {
    datas.forEach((cur, i) => {
      const list = document.createElement('li');
      list.setAttribute('tabindex', i);
      list.classList.add(type);
      list.innerHTML = `
        <span>
        ${
          type === 'recommend'
            ? `<icon-element name="arrow-top-right" size="16"></icon-element>`
            : ''
        }
        ${this.highlightText({ s, text: cur.title })}</span>
        ${
          type === 'history'
            ? `<icon-element name="close" size="16"></icon-element>`
            : ''
        }`;
      this.div.append(list);
    });
    document.dispatchEvent(new CustomEvent('search-list-rendered'));
    if (type === 'recommend')
      document.dispatchEvent(new CustomEvent('search-recommend-list-rendered'));
  }

  runSearch(s = '', page = 1) {
    getSearchDataAPI(s, page).then((datas) => {
      if (datas.length === 0) return this.removeChildren();
      this.removeChildren();
      this.renderSearchList({ s, datas });
    });
  }

  highlightText({ s, text }) {
    if (text.includes(s) && s !== '') {
      return text.replace(s, `<span class="highlight">${s}</span>`);
    }
    return text;
  }
}

export default Search;
