import { _ } from '../utils/utility.js';

class SearchBar {
  #inputData;
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
  }

  //로컬스토리지가 비어있는지 확인후, 값이 있다면 최근 검색어 띄우는 메서드
  getRecentData() {
    const storage = localStorage.getItem(this.INPUT_KEY);
    if(!storage) return;
    const parseInput = JSON.parse(storage);
    this.#inputData = parseInput;
    if(parseInput.length >= 10) this.#inputData = parseInput.slice(-9);
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

  //Input 입력시 입력값 받아서 저장하는 메서드
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

  //로컬스토리지에 저장하는 메서드
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
}

export { SearchBar };