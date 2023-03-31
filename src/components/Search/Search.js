import searchStyle from './searchStyle.js';
import { getSearchDataAPI, getSearchRecommendItemsAPI } from '@apis/search.js';

class Search extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.searchList = this.getAttribute('data-search-list');
    this.shadowRoot.append(searchStyle.call(this));
  }

  showAction(eventTarget) {
    this.renderDefault(eventTarget);
    this.showDefaultSearch();
  }

  closeAction() {
    this.remove();
    this.backdrop.remove();
  }

  renderDefault(eventTarget) {
    this.div = document.createElement('div');
    this.div.classList.add('search-list-container');
    this.shadow.append(this.div);
    eventTarget.shadowRoot.append(this);

    this.backdrop = document.createElement('backdrop-element');
    document.body.append(this.backdrop);
  }

  renderSearchList({ s, datas, type = 'search-result' }) {
    const searchListContainer = this.shadowRoot.querySelector(
      '.search-list-container'
    );
    searchListContainer.style.transition = 'opacity .1s ease-out';
    datas.forEach((cur, i) => {
      const list = document.createElement('li');
      list.setAttribute('tabindex', i);
      list.classList.add(type);
      list.innerHTML = `
        <span class="list-content">
          ${
            type === 'recommend'
              ? `<icon-element name="arrow-top-right" size="16"></icon-element>`
              : ''
          }
          <span class="text">${this.highlightText({
            s,
            text: cur.title,
          })}</span>
        </span>
        ${
          type === 'history'
            ? `<icon-element name="close" size="16"></icon-element>`
            : ''
        }`;
      this.div.append(list);
    });

    searchListContainer.removeAttribute('style');

    document.dispatchEvent(new CustomEvent('search-list-rendered'));
  }

  showDefaultSearch() {
    this.removeChildren();
    this.loadDefaultItems();
  }

  removeChildren() {
    if (this.div.hasChildNodes()) this.div.innerHTML = '';
  }

  loadDefaultItems() {
    getSearchRecommendItemsAPI(5).then((datas) => {
      this.loadHistories();
      this.renderSearchList({ s: '', datas, type: 'recommend' });
      this.shadowRoot
        .querySelector('.search-list-container')
        .classList.add('show');
    });
  }

  loadHistories() {
    const histories = JSON.parse(
      localStorage.getItem('search-histories')
    ).reverse();
    if (!histories) return;
    this.renderSearchList({ s: '', datas: histories, type: 'history' });
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
