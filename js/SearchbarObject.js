class SearchbarFlyout {
  constructor(data) {
    this.element = document.querySelector("#search-flyout");
    this.data = data;
    this.inputForm = document.querySelector(".homeHeader__search");
  }

  // 행동을 먼저 생각하기
  // 추천 검색어 el 생성
  makeRecomKeywordsEl() {
    const randomNumber = Math.floor(Math.random() * this.data.length);
    const randomPickKeywords = this.data[randomNumber].keywords;
    const div = `<div class="search-flyout-recKeywords"><i class="fa-solid fa-arrow-trend-up"></i>${randomPickKeywords}</div>`;
    const recElement = this.element.querySelector(
      ".search-flyout-recContainer"
    );
    recElement.innerHTML += div;
  }

  // 유저 검색 입력값 input
  inputUserKeywords(event) {
    event.preventDefault();
    const id = Date.now();
    const userInput = this.inputForm.querySelector("input");
    const inputValue = userInput.value;
    userInput.value = "";
    this.makeUserKeywordsEl(inputValue, id);
  }

  // 유저 검색 입력값 el 생성
  makeUserKeywordsEl(inputValue, id) {
    if (inputValue === "") return;

    const mySearchContainer = this.element.querySelector(
      ".search-flyout-mySearchContainer"
    );
    const div = `<div> 
                  <span>${inputValue} <span>  in All Departments</span></span>
                  <button id="${id}"><i class="fa-solid fa-x"></i></button></div>`;
    mySearchContainer.innerHTML += div;
    const deleteBtn = this.element.querySelector("button");
    deleteBtn.addEventListener("click", this.deleteUserKeywordsEl.bind(this));
  }

  //  유저 검색 입력값 el 삭제
  deleteUserKeywordsEl(event) {
    const el = event.target.closest("div");
    el.remove();
  }

  // 이벤트 등록 메서드
  addEvent() {
    this.inputForm.addEventListener(
      "submit",
      this.inputUserKeywords.bind(this)
    );
  }
}
