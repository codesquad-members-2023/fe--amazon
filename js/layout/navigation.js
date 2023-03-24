import { $ } from "../utils.js";
import { items } from "../data/loginHover.js";

class Navigation {
  constructor() {
    this.loginModal = $(".login__modal");

    this.listItems = $(".list__items");
    this.accountItems = $(".account__items");

    this.loginMenu = $(".nav__login");
    this.loginHover = $(".login__hover");

    this.shippingMenu = $(".nav__shipping-address");
    this.shippingHover = $(".shipping__hover");

    this.dimmedLayer = $(".dimmed-layer");
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

  showLoginHover() {
    this.loginMenu.addEventListener("mouseover", () => {
      this.loginHover.classList.add("login__hover-show");
      this.dimmedLayer.classList.add("dimmed-layer__show");
    });
  }

  hideLoginHover() {
    this.loginMenu.addEventListener("mouseout", () => {
      this.loginHover.classList.remove("login__hover-show");
      this.loginModal.classList.remove("login__modal-show");
      this.dimmedLayer.classList.remove("dimmed-layer__show");
    });
  }

  showShippingHover() {
    this.shippingMenu.addEventListener("mouseover", () => {
      this.shippingHover.classList.add("shipping__hover-show");
      this.loginModal.classList.remove("login__modal-show");
      this.dimmedLayer.classList.add("dimmed-layer__show");
    });
  }

  hideShippingHover() {
    this.shippingMenu.addEventListener("mouseout", () => {
      this.shippingHover.classList.remove("shipping__hover-show");
      this.dimmedLayer.classList.remove("dimmed-layer__show");
    });
  }

  runNavigation() {
    this.showLoginModal();
    this.addLoginHoverData();
    this.showLoginHover();
    this.hideLoginHover();
    this.showShippingHover();
    this.hideShippingHover();
  }
}

export { Navigation };
