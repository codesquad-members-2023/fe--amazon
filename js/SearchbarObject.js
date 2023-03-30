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
    const userInput = this.inputForm.querySelector("input");
    const inputValue = userInput.value;
    userInput.value = "";
    this.makeUserKeywordsEl(inputValue);
  }

  // 유저 검색 입력값 el 생성
  makeUserKeywordsEl(inputValue) {
    if (inputValue === "") return;
    const mySearchContainer = this.element.querySelector(
      ".search-flyout-mySearchContainer"
    );
    const div = `<div> 
                  <span>${inputValue}</span>
                  <i class="fa-solid fa-x"></i>`;
    mySearchContainer.innerHTML += div;
  }

  // 이벤트 등록 메서드
  addEvent() {
    this.inputForm.addEventListener(
      "submit",
      this.inputUserKeywords.bind(this)
    );
  }
}
