import Search from '@components/Search/Search.js';

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
  searchInput?.addEventListener('keyup', (e) => {
    if (searchInput.value === '') return searchInstance.showDefaultSearch();
    searchInstance.runSearch(searchInput.value);
  });
}

openSearchInput();
// closeSearchInput();
runSearch();
