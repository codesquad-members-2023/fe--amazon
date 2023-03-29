class InputSearchView {
  #parentElement = document.querySelector(".search-form");
  #input = this.#parentElement.querySelector(".search-form__input");

  getValue() {
    return this.#input.value;
  }

  addHandlerInput(handler) {
    this.#input.addEventListener("input", handler);
  }

  addHandlerFocus(handler) {
    this.#input.addEventListener("focus", handler);
  }

  addHandlerBlur(handler) {
    this.#input.addEventListener("blur", handler);
  }

  addHandlerSubmit(handler) {
    this.#parentElement.addEventListener("submit", handler);
  }
}

export default new InputSearchView();
