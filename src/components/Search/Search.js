import searchStyle from './searchStyle.js';
import { getSearchDataAPI, getSearchRecommendItemsAPI } from '@apis/search.js';

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
    this.loadRecommendItems();
  }

  loadRecommendItems() {
    getSearchRecommendItemsAPI(5).then((datas) => {
      this.clearChildren();
      this.renderSearchList({ s: '', datas, isRecommendList: true });
    });
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
    if (text.includes(s) && s !== '') {
      return text.replace(s, `<span class="highlight">${s}</span>`);
    }
    return text;
  }

  renderSearchList({ s, datas, isRecommendList = false }) {
    const ul = document.createElement('ul');
    if (isRecommendList) ul.id = 'recommend-list';
    ul.innerHTML = `${datas.reduce((acc, cur) => {
      return (
        acc +
        `<li>
        ${
          isRecommendList
            ? `<icon-element name="arrow-top-right" size="16"></icon-element>`
            : ''
        }${this.highlightText({ s, text: cur.title })}</li>`
      );
    }, '')}`;
    this.div.append(ul);
  }
}

export default Search;
