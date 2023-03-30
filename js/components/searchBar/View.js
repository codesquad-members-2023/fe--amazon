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
      // Todo: 현재 입력된 내용 model의 data와 비교하는 메서드 만들기.
      compareWithDB(target.value);
    });
  }

  searchBarBtnAddClickEvent(clickEvent) {
    this.searchBarButton.addEventListener('click', clickEvent);
  }
}

export default View;
