import { _ } from '../utils/utility.js';

class SearchBar {
  #input;
  INPUT_KEY = "InputKey";
  constructor({ recommendURL, maximumLength }) {
    this.recommendURL = recommendURL;
    this.MAXIMUM_LENGTH = maximumLength;
    this.#input = [];
    this.searchForm = document.querySelector('.search_form');
    this.searchInput = document.querySelector('.search_input');
    this.searchContainer = document.querySelector('.search_container');
    this.suggestionList = document.querySelector('.search_suggestion');
    this.modalBackground = document.querySelector('.modal_background');
  }

  init() {
    this.toggleSearchBar();
    this.getRecentData();
    this.submitInput();
    this.deleteRecentData();
    this.userInput();
    // this.moveDirection();
  }

  toggleSearchBar() {
    this.searchInput.addEventListener('click',
      _.removeAClass.bind(this, ["hidden", this.searchContainer, this.modalBackground]));
    this.searchForm.addEventListener('mouseleave',
      _.addAClass.bind(this, ["hidden", this.searchContainer, this.modalBackground]));
  }

  getRecentData() {
    const storage = localStorage.getItem(this.INPUT_KEY);
    if(!storage) return;

    const parseInput = JSON.parse(storage);
    this.#input = parseInput;
    if(parseInput.length >= this.MAXIMUM_LENGTH) this.#input = parseInput.slice(-(this.MAXIMUM_LENGTH - 1));
    parseInput.forEach(this.insertRecentData.bind(this));
    this.loadRecommendation();
  }

  insertRecentData(newInput) {
    const inputTemplate = `<li id="${newInput.id}"><span class="recentInput">${newInput.text}</span><img id="search_delete_btn" src="/asset/images/vectors/X.svg" alt="검색어 삭제 아이콘"></li>`;
    this.suggestionList.insertAdjacentHTML('afterbegin', inputTemplate);
  }

  loadRecommendation () {
    const recommendCount = this.MAXIMUM_LENGTH - this.#input.length;
    fetch(`${this.recommendURL}`)
    .then(res => res.json())
    .then(res => this.insertRecommendation(res, recommendCount));
  }

  insertRecommendation(suggestions, recommendCount) {
    suggestions.slice(0, recommendCount)
    .forEach(element => {
      this.suggestionList.insertAdjacentHTML('beforeend',
      `<li class="recommend"><img id="recommend_btn" src="/asset/images/vectors/RightUp.svg" alt="추천검색어 이동 아이콘"><span>${element.value}</span></li>`);
    });
  }

  submitInput() {
    this.searchForm.addEventListener("submit", () => {
      const newInput = this.searchInput.value;
      if(!newInput || newInput === ' ') return;
      this.searchInput.value = "";
      this.#input.push({
        id : Date.now(),
        text : newInput,
      });
      this.saveInput();
    });
  }

  saveInput() {
    localStorage.setItem(this.INPUT_KEY, JSON.stringify(this.#input));
  }

  deleteRecentData() {
    this.suggestionList.addEventListener('click', ({ target })=> {
      const deleteBtn = target.closest('img');
      if(!deleteBtn || deleteBtn.id !== 'search_delete_btn') return;

      const targetData = deleteBtn.parentElement;
      this.#input = this.#input.filter(input => input.id !== Number(targetData.id));
      targetData.remove();
      this.saveInput();
    });
  }

  userInput() {
    this.searchInput.addEventListener('input',
    ({ target }) => this.loadSuggestions(target.value));
  }

  loadSuggestions(searchInput) {
    fetch(`https://completion.amazon.com/api/2017/suggestions?session-id=135-3077052-6015425&customer-id=&request-id=DMRETXPQ3PZJQ5TKYSWX&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=undefined&prefix=${searchInput}&event=onFocusWithSearchTerm&limit=11&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1615280967091`)
    .then(res => res.json())
    .then(res => this.insertSuggestions(res.suggestions));
  }

  insertSuggestions(suggestions) {
    this.suggestionList.innerHTML = "";
    suggestions.forEach(element => {
      this.suggestionList.insertAdjacentHTML('afterbegin',
      `<li>${element.value}</li>`);
    });
  }
}

export { SearchBar };