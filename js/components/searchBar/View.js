// Model에서만 DOM 조작 해야한다.
// 다른 곳에선 DOM 조작 XXX
class View {
  constructor() {
    this.searchBar = document.querySelector('.search_bar');
    this.searchBarButton = document.querySelector('.search_button');
    this.searchForm = document.querySelector('.search_form');
    this.index = -1;
  }

  searchBarAddFocusEvent() {
    this.searchBar.addEventListener('focusin', () => {
      this.searchForm.classList.add('flex');
    });
    this.searchBar.addEventListener('focusout', () => {
      const focusItem = document.querySelector('.focus');
      if (focusItem) focusItem.classList.remove('focus');
      this.index = -1;
      this.searchForm.classList.remove('flex');
    });
  }

  searchBarAddInputEvent(compareWithDB) {
    this.searchBar.addEventListener('keyup', ({ target, key }) => {
      this.index = -1;
      // 만약 전과 똑같은 것을 요청하면 콜백함수 실행 안하게끔 바꾸기.
      if (key === 'ArrowDown' || key === 'ArrowUp') return;

      if (target.value !== '') {
        compareWithDB(target.value).then((result) => {
          this.render(result);
        });
      }
    });

    this.searchBar.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const items = document.querySelectorAll('.search_list');

        items.forEach((item, i) => {
          if (item.classList.contains('focus')) {
            this.index = i;
          }
          item.classList.remove('focus');
        });

        if (event.key === 'ArrowDown' && this.index < items.length - 1) {
          this.index++;
        } else if (event.key === 'ArrowUp' && this.index > 0) {
          this.index--;
        }

        items[this.index].classList.add('focus');
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
