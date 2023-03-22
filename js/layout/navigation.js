import { $ } from "../utils.js";
import { items } from "../data/loginHover.js";

class Navigation {
  constructor() {
    this.loginModal = $(".login__modal");
    this.loginMenu = $(".nav__login");
    this.listItems = $(".list__items");
    this.accountItems = $(".account__items");
    this.dimmed1 = $(".dimmed");
  }

  showLoginModal() {
    const showModalTime = 1000;
    setTimeout(() => this.loginModal.classList.add("login__modal-show"), showModalTime);
  }

  addLoginHoverData() {
    for (const element of items.loginListItems) {
      this.listItems.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
    }
    for (const element of items.accountItems) {
      this.accountItems.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
    }
  }

  
  dimmed() {
    this.loginMenu.addEventListener("mouseover", () => {
      this.dimmed1.classList.add("dimmedShow");
      this.loginModal.classList.remove('login__modal-show')
    });
  }


}

export { Navigation };
