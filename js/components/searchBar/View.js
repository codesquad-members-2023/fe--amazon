// Model에서만 DOM 조작 해야한다.
// 다른 곳에선 DOM 조작 XXX
class View {
  constructor() {
    this.searchBar = document.querySelector('.search_bar');
    this.searchBarButton = document.querySelector('.searcj_button');
    this.searchForm = document.querySelector('.search_form');
  }

  searchBarAddEvent(focusEvent) {
    this.searchBar.addEventListener('focus', focusEvent);
  }

  searchBarBtnAddEvent(clickEvent) {
    this.searchBarButton.addEventListener('click', clickEvent);
  }
}

export default View;
