import searchStyle from './searchStyle.js';
import { getSearchDataAPI, getSearchRecommendItemsAPI } from '@apis/search.js';

class Search extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    this.searchList = this.getAttribute('data-search-list');
    this.div = document.createElement('ul');
    shadow.append(this.div);
    this.showDefaultSearch();
    this.shadowRoot.append(searchStyle.call(this));
  }

  showAction(eventTarget) {
    eventTarget.shadowRoot.append(this);
    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);
  }

  closeAction() {
    this.remove();
  }

  removeChildren() {
    this.div.innerHTML = '';
  }

  showDefaultSearch() {
    this.removeChildren();
    this.loadHistories();
    this.loadRecommendItems();
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
    const ul = document.createElement('ul');
    if (type === 'history') ul.id = 'history-list';
    if (type === 'recommend') ul.id = 'recommend-list';
    ul.innerHTML = `${datas.reduce((acc, cur) => {
      return (
        acc +
        `<li>
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
        }
        </li>
        `
      );
    }, '')}`;
    this.div.append(ul);
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
