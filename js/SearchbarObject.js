class SearchbarFlyout {
  constructor(data) {
    this.element = document.querySelector("#search-flyout");
    this.data = data;
    this.inputForm = document.querySelector(".homeHeader__search");
    this.userKeywordsList = [];
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
    const id = Date.now();
    userInput.value = "";
    if (inputValue === "") return;
    this.userKeywordsList.push({ text: inputValue, id: id });
    this.makeUserKeywordsEl(inputValue, id);
    this.saveUserKeywords();
  }

  // input값 로컬스토리지에 저장
  saveUserKeywords() {
    localStorage.setItem("userKeywords", JSON.stringify(this.userKeywordsList));
  }

  // 로컬스토리지 값 가져오기
  getUserKeywords() {
    const savedUserKeywords = localStorage.getItem("userKeywords");
    if (savedUserKeywords !== null) {
      const parsedUserKeywords = JSON.parse(savedUserKeywords);
      parsedUserKeywords.forEach((userKeywords) =>
        this.makeUserKeywordsEl(userKeywords.text, userKeywords.id)
      );
    }
  }

  // 유저 검색 입력값 el 생성
  makeUserKeywordsEl(userKeywords, id) {
    if (userKeywords === "") return;

    const mySearchContainer = this.element.querySelector(
      ".search-flyout-mySearchContainer"
    );
    const elAttribute = `<span>${userKeywords}<span>in All Departments</span></span>
                  <button><i class="fa-solid fa-x"></i></button>`;

    const newUserKeywords = document.createElement("div");
    newUserKeywords.classList.add(id);
    newUserKeywords.innerHTML = elAttribute;

    const topUserKeywords = mySearchContainer.querySelector("div:first-child");

    if (topUserKeywords === null) {
      mySearchContainer.appendChild(newUserKeywords);
    } else
      topUserKeywords.parentNode.insertBefore(newUserKeywords, topUserKeywords);

    // deleteBtn에 이벤트 부여
    const deleteBtns = this.element.querySelectorAll("button");
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", this.deleteUserKeywordsEl.bind(this));
    });
  }

  //  유저 검색 입력값 el 삭제
  deleteUserKeywordsEl(event) {
    const el = event.target.closest("div");
    console.log(el.className);
    el.remove();

    this.userKeywordsList = this.userKeywordsList.filter(
      (thisEl) => thisEl.id !== parseInt(el.className)
    );
    this.saveUserKeywords();
  }

  // 이벤트 등록 메서드
  addEvent() {
    this.inputForm.addEventListener(
      "submit",
      this.inputUserKeywords.bind(this)
    );
  }
}
