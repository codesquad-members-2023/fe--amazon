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
    handleDeleteHistories();
    handleFocus().run();
  });
}

function closeSearchInput() {
  searchInput?.addEventListener('blur', () => {
    document.removeEventListener('keydown', handleKeyoardEventArrowUpAndDown);
    searchInstance.closeAction();
    searchInstance = null;
  });
}

function runSearch() {
  searchInput?.addEventListener(
    'keyup',
    debounce(() => {
      if (searchInput.value === '') return searchInstance.showDefaultSearch();
      searchInstance.runSearch(searchInput.value);
      handleFocus().resetTarget();
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

function handleDeleteHistories() {
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

function handleFocus() {
  let target = null;
  return {
    run: () => {
      document.addEventListener(
        'keydown',
        handleKeyoardEventArrowUpAndDown(target)
      );
    },
    resetTarget: () => (target = null),
  };
}

function handleKeyoardEventArrowUpAndDown(target) {
  return (e) => {
    const searchElement = document
      .querySelector('navbar-element')
      .shadowRoot.querySelector('text-input-element')
      .shadowRoot.querySelector('search-element')
      .shadowRoot.querySelector('li');

    const isKeyArrowUp = e.key === 'ArrowUp';
    const isKeyArrowDown = e.key === 'ArrowDown';
    if (isKeyArrowUp || isKeyArrowDown) {
      e.preventDefault();
      if (!target) {
        target = searchElement;
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
// closeSearchInput();
runSearch();
handleEnterKeyEvent();
