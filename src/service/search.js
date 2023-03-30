import Search from '@components/Search/Search.js';
import { debounce } from '@src/utils.js';

const search = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#search-input');

const searchInput = document
  .querySelector('navbar-element')
  .shadowRoot.querySelector('#search-input')
  .shadowRoot.querySelector('input');

let searchInstance = null;

function openSearchInput() {
  searchInput.addEventListener('focus', () => {
    if (searchInstance) return;
    searchInstance = new Search();
    searchInstance.showAction(search);
    deleteHistories();
  });
}

function closeSearchInput() {
  searchInput?.addEventListener('blur', () => {
    searchInstance.closeAction();
    searchInstance = null;
  });
}

let searchKeyword = '';

function runSearch() {
  searchInput?.addEventListener(
    'keyup',
    debounce(() => {
      if (searchInput.value === '') return searchInstance.showDefaultSearch();
      searchInstance.runSearch(searchInput.value);
    }, 300)
  );
}

function handleEnterKeyEvent() {
  searchInput?.addEventListener(
    'keyup',
    debounce((e) => {
      if (e.key === 'Enter') {
        const searchHistories = getSearchHistories() || [];
        searchHistories.push({ title: searchInput.value });
        setSearchHistories(searchHistories);
      }
    }, 300)
  );
}

function deleteHistories() {
  const historyList = document
    .querySelector('navbar-element')
    .shadowRoot.querySelector('text-input-element')
    .shadowRoot.querySelector('search-element')
    .shadowRoot.querySelector('#history-list');

  historyList?.addEventListener('click', (e) => {
    const li = e.target.parentElement;
    if (e.target.nodeName !== 'ICON-ELEMENT') return;
    const searchHistories = getSearchHistories();
    const newSearchHistories = searchHistories.filter(
      (history) => history.title !== e.target.previousElementSibling.innerText
    );
    setSearchHistories(newSearchHistories);
    li.remove();
  });
}

function getSearchHistories() {
  return JSON.parse(localStorage.getItem('search-histories'));
}

function setSearchHistories(histories) {
  localStorage.setItem('search-histories', JSON.stringify(histories));
}

openSearchInput();
// closeSearchInput();
runSearch();
handleEnterKeyEvent();
