import recommendImage from "../../assets/images/recommend.svg";
import historyImage from "../../assets/images/history.svg";

class AutoCompletedSearchView {
  #parentElement = document.querySelector(".search-term__auto-completed-items");

  clear() {
    this.#parentElement.innerHTML = "";
  }

  // 메서드명 바꾸기 렌더링은 아니고 단순 꾸미긴데..
  renderSelectedItem(idx) {
    const selectedItem = this.#parentElement.querySelector(
      `.search-term__item:nth-of-type(${idx})`
    );

    if (!selectedItem) return;

    [...this.#parentElement.children].forEach(
      // classList remove로 바꾸기
      (li) => (li.style.backgroundColor = "white")
    );

    // classList add로 바꾸기
    selectedItem.style.backgroundColor = "grey";

    return selectedItem.querySelector(".search-term__span").textContent;
  }

  renderAutoCompleted(data, query) {
    const markup = this.#generateAutoCompletedMarkup(data, query);
    this.#parentElement.innerHTML = markup;
  }

  renderRecommended(searchHistories, data) {
    const historyMarkup = this.#generateHistoryMarkup(searchHistories);
    const recommendMarkup = this.#generateRecommendMarkup(data);

    this.#parentElement.innerHTML = historyMarkup + recommendMarkup;
  }

  #generateHistoryMarkup(searchHistories) {
    const html = searchHistories
      .map(
        (searchHistory) =>
          `<li class="search-term__item">
              <span class="search-term__history search-term__span">${searchHistory.term}</span>
              <img
                class="search-term__remove"
                src="${historyImage}"
                data-id = ${searchHistory.id}
              />
            </li>`
      )
      .join("");

    return html;
  }

  #generateRecommendMarkup(data) {
    const html = data
      .map((item) => {
        return `<li class="search-term__item">
              <img
                class="search-term__recommend-image"
                src="${recommendImage}"
              />
              <span class="search-term__recommend search-term__span">${item.term}</span>
            </li>`;
      })
      .join("");
    return html;
  }

  #generateAutoCompletedMarkup(data, query) {
    const html = data
      .map((item) => {
        return `<li class="search-term__item">
              <span class="search-term__auto-completed search-term__span">${item.term.replace(
                query,
                `<span class="search-term__match">${query}</span>`
              )}</span>
            </li>`;
      })
      .join("");

    return html;
  }

  getItemLength() {
    return this.#parentElement.children.length;
  }

  addHandlerClick(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      const closeImage = e.target.closest(".search-term__remove");

      if (!closeImage) return;
      const historyId = Number(closeImage.dataset.id);

      handler(historyId);
    });
  }
}

export default new AutoCompletedSearchView();
