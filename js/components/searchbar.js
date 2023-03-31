import { _ } from '../utils/utility.js';

class SearchBar {
  #inputData;
  INPUT_COUNT = 10;
  INPUT_KEY = "InputKey";
  constructor(url) {
    this.URL = url;
    this.#inputData = [];
    this.searchForm = document.querySelector('.search_form');
    this.searchInput = document.querySelector('.search_input');
    this.searchContainer = document.querySelector('.search_container');
    this.suggestionList = document.querySelector('.search_suggestion');
    this.modalBackground = document.querySelector('.modal_background');
  }

  init() {
    this.getRecentData();
    this.toggleSearchBar();
    this.submitInput();
    this.deleteInputData();
    this.checkInput();
    // this.listUpRecommended();
  }

  //로컬스토리지가 비어있는지 확인후, 값이 있다면 최근 검색어 띄우는 메서드
  getRecentData() {
    const storage = localStorage.getItem(this.INPUT_KEY);
    if(!storage) return;
    const parseInput = JSON.parse(storage);
    this.#inputData = parseInput;
    if(parseInput.length >= this.INPUT_COUNT) this.#inputData = parseInput.slice(-(this.INPUT_COUNT - 1));
    parseInput.forEach(this.insertRecentData.bind(this));
  }

  insertRecentData(newInput) {
    const inputTemplate = `<li id="${newInput.id}"><span class="recentInput">${newInput.text}</span><img id="search_delete_btn" src="/asset/images/vectors/X.svg" alt="검색어 삭제 아이콘"></li>`;
    this.suggestionList.insertAdjacentHTML('afterbegin', inputTemplate);
  }

  toggleSearchBar() {
    this.searchInput.addEventListener('click', () => {
      _.removeAClass("hidden", this.searchContainer, this.modalBackground);
    });
    this.searchForm.addEventListener('mouseleave', () => {
      _.addAClass("hidden", this.searchContainer, this.modalBackground);
    });
  }

  submitInput() {
    this.searchForm.addEventListener("submit", () => {
      const newInput = this.searchInput.value;
      if(!newInput || newInput === ' ') return;
      this.searchInput.value = "";
      const newInputObj = {
        id : Date.now(),
        text : newInput,
      }
      this.#inputData.push(newInputObj);
      this.saveInput();
    });
  }

  saveInput() {
    localStorage.setItem(this.INPUT_KEY, JSON.stringify(this.#inputData));
  }

  deleteInputData() {
    this.suggestionList.addEventListener('click', ({ target })=> {
      const deleteBtn = target.closest('img');
      if(!deleteBtn) return;
      const targetData = deleteBtn.parentElement;
      this.#inputData = this.#inputData.filter(input => input.id !== Number(targetData.id));
      targetData.remove();
      this.saveInput();
    });
  }

  checkInput() {
    this.searchInput.addEventListener('input', ({ target }) => {
      const searchInput = target.value;
      this.loadSuggestions(searchInput);
    })
  }

  //자동완성 데이터 GET 가져오는 메서드
  loadSuggestions(searchInput) {
    fetch(`https://completion.amazon.com/api/2017/suggestions?session-id=135-3077052-6015425&customer-id=&request-id=DMRETXPQ3PZJQ5TKYSWX&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=undefined&prefix=${searchInput}&event=onFocusWithSearchTerm&limit=11&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1615280967091`)
    .then(res => res.json())
    .then(res => this.listUpSuggestions(res.suggestions));
  }

  //this.#inputData = []; 비어있으면 추천검색어 10개 띄우기
  listUpRecommended() {
    if(!this.#inputData.length) return;
    fetch(`${this.URL}`)
    .then(res => res.json())
    .then(res => this.listUpSuggestions(res));
  }

  //자동 검색어 채워주는 메서드
  listUpSuggestions(suggestions) {
    this.suggestionList.innerHTML = "";
    suggestions.slice(0, 10).forEach(element => {
      const li = document.createElement("li");
      li.innerHTML = element.value;
      this.suggestionList.append(li);
    });
  }

  //최근검색어 있으면 그게 최상단으로 하고 아니면, 모두 추천검색어로 리스트업하기
  //만약에 최근검색어가 10개미만이면 ? (10 - 최근검색어.lenght)만큼을 추천검색어를 채우기
  listUp() {
    if(this.#inputData.length < this.INPUT_COUNT) 
  }
}

export { SearchBar };