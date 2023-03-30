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
    document.addEventListener(
      "click",
      (e) => {
        console.log(e.target);
        const test = e.target.closest(".search-form");
        console.log(test);
        if (test) return;
        handler();
      },
      //  event delegation 발표때 물어보기
      true
    );
  }

  addHandlerSubmit(handler) {
    this.#parentElement.addEventListener("submit", handler);
  }
}

export default new InputSearchView();
