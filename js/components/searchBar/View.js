// Model에서만 DOM 조작 해야한다.
// 다른 곳에선 DOM 조작 XXX
class View {
  constructor() {
    this.searchBar = document.querySelector('.search_bar');
    this.searchBarButton = document.querySelector('.search_button');
    this.searchForm = document.querySelector('.search_form');
    this.index = -1;
  }

  searchBarAddFocusEvent(suggestionData) {
    this.searchBar.addEventListener('focusin', ({ target }) => {
      this.searchForm.classList.add('flex');
      if (target.value === '') {
        suggestionData.then((result) => {
          this.searchForm.innerHTML = this.generateSuggestionLists(result);
        });
      }
    });

    this.searchBar.addEventListener('focusout', () => {
      const focusItem = document.querySelector('.focus');
      if (focusItem) focusItem.classList.remove('focus');
      this.index = -1;
      this.searchForm.classList.remove('flex');
    });
  }

  searchBarAddInputEvent(compareWithDB, suggestionData) {
    this.searchBar.addEventListener('keyup', ({ target, key }) => {
      this.index = -1;
      // 만약 전과 똑같은 것을 요청하면 콜백함수 실행 안하게끔 바꾸기.
      if (key === 'ArrowDown' || key === 'ArrowUp') return;

      if (target.value !== '') {
        compareWithDB(target.value).then((result) => {
          this.render(result, target.value);
        });
      } else {
        suggestionData.then((result) => {
          this.searchForm.innerHTML = this.generateSuggestionLists(result);
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

        if (event.key === 'ArrowDown' && this.index <= items.length - 1) {
          if (this.index === items.length - 1) this.index = 0;
          else this.index++;
        } else if (event.key === 'ArrowUp' && this.index >= 0) {
          if (this.index === 0) this.index = items.length - 1;
          else this.index--;
        }

        items[this.index].classList.add('focus');
      }
    });
  }

  searchBarBtnAddClickEvent(clickEvent) {
    this.searchBarButton.addEventListener('click', clickEvent);
  }

  render(data, inputText) {
    this.searchForm.innerHTML = this.generateMatchingLists(data, inputText);
  }

  generateMatchingLists(data, inputText) {
    const regex = new RegExp(inputText, 'i');
    return data.reduce((acc, cur) => {
      // 이 로직은 Model로 빼기!!!
      // issue : 전체 단어를 다 받으면 중간에 띄어쓰기가 씹히는 오류.
      const matchResult = cur.match(regex);
      const replaceCur = cur.replace(
        regex,
        `<span class="input_text">${matchResult}</span>`,
      );
      return (acc += `<li class="search_list">${replaceCur}</li>`);
    }, ``);
  }

  generateSuggestionLists(suggestionData) {
    console.log(suggestionData);
    return suggestionData.reduce((acc, cur) => {
      const html = `
      <div class="suggestion_list">
      
        <li class="search_list">
        <image class="suggestion_icon" src="https://m.media-amazon.com/images/S/sash/16Ce0wZkrsCr$en.png"/>
        ${cur}
        </li>
      </div>
      `;
      return (acc += html);
    }, ``);
  }
}

export default View;
