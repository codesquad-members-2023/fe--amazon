// Model에서만 DOM 조작 해야한다.
// 다른 곳에선 DOM 조작 XXX
class View {
  constructor() {
    this.searchBar = document.querySelector('.search_bar');
    this.searchBarButton = document.querySelector('.search_button');
    this.searchForm = document.querySelector('.search_form');
  }

  searchBarAddFocusEvent() {
    this.searchBar.addEventListener('focusin', () => {
      this.searchForm.classList.add('display_flex');
    });
    this.searchBar.addEventListener('focusout', () => {
      this.searchForm.classList.remove('display_flex');
    });
  }

  searchBarAddInputEvent(compareWithDB) {
    this.searchBar.addEventListener('keyup', ({ target }) => {
      if (target.value !== '') compareWithDB(target.value);
    });
  }

  searchBarBtnAddClickEvent(clickEvent) {
    this.searchBarButton.addEventListener('click', clickEvent);
  }
}

export default View;
