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
    this.searchBar.addEventListener('focusout', ({ target }) => {
      this.searchForm.classList.remove('display_flex');
    });
  }

  searchBarAddInputEvent() {
    this.searchBar.addEventListener('keyup', ({ target }) => {
      console.log(target.value);
      // Todo: 현재 입력된 내용 model의 data와 비교하는 놈 호출해서 넣어주기..
    });
  }

  searchBarBtnAddClickEvent(clickEvent) {
    this.searchBarButton.addEventListener('click', clickEvent);
  }
}

export default View;
