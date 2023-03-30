import recommendImage from "../../assets/images/recommend.svg";
import historyImage from "../../assets/images/history.svg";

class AutoCompletedSearchView {
  #parentElement = document.querySelector(".search-term__auto-completed-items");

  renderAutoCompleted(data, query) {
    const markup = this.#generateAutoCompletedMarkup(data, query);
    this.#parentElement.innerHTML = markup;
  }

  renderHistories(searchHistories) {}

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
              <span class="search-term__history">${searchHistory.term}</span>
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
              <span class="search-term__recommend">${item.term}</span>
            </li>`;
      })
      .join("");
    return html;
  }

  #generateAutoCompletedMarkup(data, query) {
    const html = data
      .map((item) => {
        return `<li class="search-term__item">
              <span class="search-term__auto-completed">${item.term.replace(
                query,
                `<span class="search-term__match">${query}</span>`
              )}</span>
            </li>`;
      })
      .join("");

    return html;
  }

  clear() {
    this.#parentElement.innerHTML = "";
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
