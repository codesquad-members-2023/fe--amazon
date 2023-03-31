import Search from '@components/Search/Search.js';
import { debounce } from '@src/utils.js';
import { loginActionElement } from './action.js';

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
    if (loginActionElement) loginActionElement.closeAction();
    if (searchInstance) return;
    searchInstance = new Search();
    searchInstance.showAction(search);
    deleteHistories();
    moveFocusedList()();
    closeSearch();
  });
}

function closeSearch() {
  document.querySelector('backdrop-element').addEventListener('click', () => {
    document.removeEventListener('keydown', handleKeyoardEventArrowUpAndDown);
    searchInstance.closeAction();
    searchInstance = null;
  });
}

function runSearch() {
  searchInput?.addEventListener(
    'keyup',
    debounce((e) => {
      if (searchInput.value === '') return searchInstance.showDefaultSearch();
      searchInstance.runSearch(searchInput.value);
    }, 300)
  );
}

function handleEnterKeyEvent() {
  searchInput?.addEventListener(
    'keyup',
    debounce((e) => {
      e.stopPropagation();
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
    .shadowRoot.querySelector('search-element').shadowRoot;

  historyList.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'ICON-ELEMENT' && e.target.name !== 'close')
      return;

    const li = e.target.parentElement;
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

function moveFocusedList() {
  let target = null;

  return () => {
    document.addEventListener(
      'keydown',
      handleKeyoardEventArrowUpAndDown(target)
    );
  };
}

function handleKeyoardEventArrowUpAndDown(target) {
  return (event) => {
    document.addEventListener('search-list-rendered', () => {
      target = null;
    });

    const searchElement = document
      .querySelector('navbar-element')
      .shadowRoot.querySelector('text-input-element')
      .shadowRoot.querySelector('search-element');

    const isKeyArrowUp = event.key === 'ArrowUp';
    const isKeyArrowDown = event.key === 'ArrowDown';
    if (isKeyArrowUp || isKeyArrowDown) {
      event.preventDefault();

      if (!target) {
        target = searchElement.shadowRoot.querySelector('li');
        target.focus();
        return;
      }
      if (isKeyArrowUp && target?.previousElementSibling) {
        target = target.previousElementSibling;
        target.focus();
      }
      if (isKeyArrowDown && target?.nextElementSibling) {
        target = target.nextElementSibling;
        target.focus();
      }
    }
  };
}

openSearchInput();
runSearch();
handleEnterKeyEvent();
