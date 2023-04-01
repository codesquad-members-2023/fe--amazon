import recommendImage from "../../assets/images/recommend.svg";
import historyImage from "../../assets/images/history.svg";

class AutoCompletedSearchView {
  #parentElement = document.querySelector(".search-term__auto-completed-items");

  clear() {
    this.#parentElement.innerHTML = "";
  }

  highlightSelectedItem(idx) {
    const selectedItem = this.#parentElement.querySelector(
      `.search-term__item:nth-of-type(${idx})`
    );

    if (!selectedItem) return;

    [...this.#parentElement.children].forEach((li) =>
      li.classList.remove("search-term__item--selected")
    );

    selectedItem.classList.add("search-term__item--selected");

    return selectedItem.querySelector(".search-term__span").textContent;
  }

  renderAutoCompleted(matchedTerms, searchQuery) {
    const markup = this.#generateAutoCompletedMarkup(matchedTerms, searchQuery);
    this.#parentElement.innerHTML = markup;
  }

  renderRecommended(searchHistories, recommendedTerms) {
    const historyMarkup = this.#generateHistoryMarkup(searchHistories);
    const recommendMarkup = this.#generateRecommendedMarkup(recommendedTerms);

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

  #generateRecommendedMarkup(recommendedTerms) {
    const html = recommendedTerms
      .map((recommendedTerm) => {
        return `<li class="search-term__item">
              <img
                class="search-term__recommend-image"
                src="${recommendImage}"
              />
              <span class="search-term__recommend search-term__span">${recommendedTerm.term}</span>
            </li>`;
      })
      .join("");
    return html;
  }

  #generateAutoCompletedMarkup(matchedTerms, searchQuery) {
    const html = matchedTerms
      .map((matchedTerm) => {
        return `<li class="search-term__item">
              <span class="search-term__auto-completed search-term__span">${matchedTerm.term.replace(
                searchQuery,
                `<span class="search-term__match">${searchQuery}</span>`
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
