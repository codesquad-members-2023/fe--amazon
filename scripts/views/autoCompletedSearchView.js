class AutoCompletedSearchView {
  #parentElement = document.querySelector(".search-term__auto-completed-items");

  render(data, searchHistory = []) {
    const markup = this.#generateMarkup(data, searchHistory);
    this.#parentElement.innerHTML = markup;
  }

  clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup(data, searchHistory = []) {
    console.log(searchHistory);
    const searchHistoryHtml = searchHistory
      .map(
        (item) => `<li class="search-term__recent-history-item">${item}</li>`
      )
      .join("");

    const itemsHtml = data
      .map(
        (item) =>
          `<li class="search-term__auto-completed-item">${item.term}</li>`
      )
      .join("");

    return searchHistoryHtml + itemsHtml;
  }
}

export default new AutoCompletedSearchView();
