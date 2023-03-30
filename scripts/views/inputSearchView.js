class InputSearchView {
  #parentElement = document.querySelector(".search-form");
  #input = this.#parentElement.querySelector(".search-form__input");

  getValue() {
    return this.#input.value;
  }

  setValue(textContent) {
    this.#input.value = textContent;
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
        const searchForm = e.target.closest(".search-form");

        if (searchForm) return;

        handler();
      },
      //  event delegation 발표때 물어보기
      true
    );
  }

  addHandlerSubmit(handler) {
    this.#parentElement.addEventListener("submit", handler);
  }

  addHandlerKeyDown(handler) {
    this.#input.addEventListener("keydown", (e) => {
      if (e.code !== "ArrowDown" && e.code !== "ArrowUp") return;
      e.preventDefault();

      const direction = e.code === "ArrowUp" ? -1 : 1;

      handler(direction);
    });
  }
}

export default new InputSearchView();
