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
      // 만약 전과 똑같은 것을 요청하면 콜백함수 실행 안하게끔 바꾸기.
      if (target.value !== '') {
        compareWithDB(target.value).then((result) => {
          this.render(result);
        });
      }
    });
  }

  searchBarBtnAddClickEvent(clickEvent) {
    this.searchBarButton.addEventListener('click', clickEvent);
  }

  render(data) {
    this.searchForm.innerHTML = this.generateSuggestionLists(data);
  }

  generateSuggestionLists(data) {
    return data.reduce((acc, cur) => {
      return (acc += `<li class="search_list">${cur}</li>`);
    }, ``);
  }
}

export default View;
