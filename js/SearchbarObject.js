class SearchbarFlyout {
  constructor(data) {
    this.element = document.querySelector("#search-flyout");
    this.data = data;
  }

  // 행동을 먼저 생각하기
  // 1. 추천 검색어 선정
  makeRecomKeywords() {
    const randomNumber = Math.floor(Math.random() * this.data.length);
    const randomPickKeywords = this.data[randomNumber].keywords;
    const div = `<div class="search-flyout-recKeywords"><i class="fa-solid fa-arrow-trend-up"></i>${randomPickKeywords}</div>`;
    const recElement = this.element.querySelector(
      ".search-flyout-recContainer"
    );
    recElement.innerHTML += div;
  }

  // 3. 검색데이터 기록
}
