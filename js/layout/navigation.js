import { $, modifyClassList } from "../utils.js";
import { items } from "../data/loginHover.js";

class Navigation {
  constructor() {
    this.listItems = $(".list__items");
    this.accountItems = $(".account__items");
    this.loginModal = $(".login__modal");
    this.loginMenu = $(".nav__login");
    this.loginHover = $(".login__hover");
    this.shippingMenu = $(".nav__shipping-address");
    this.shippingHover = $(".shipping__hover");
    this.dimmedLayer = $(".dimmed-layer");
    this.delayTime = 1000;
  }

  init() {
    this.showLoginModalAfterDelay(this.delayLoginModal(), this.delayTime);
    this.addLoginHoverData(items.loginListItems, this.listItems);
    this.addLoginHoverData(items.accountItems, this.accountItems);
    this.navigationEventListener();
  }

  showLoginModalAfterDelay(eventFunction, time) {
    setTimeout(() => eventFunction, time);
  }

  delayLoginModal() {
    modifyClassList(this.loginModal, "login__modal-show", "add");
  }

  addLoginHoverData(item, selector) {
    item.forEach((element) => selector.insertAdjacentHTML("beforeend", `<li>${element}</li>`));
  }

  navigationEventListener() {
    this.loginMenu.addEventListener("mouseover", () => this.showLoginHover());
    this.loginMenu.addEventListener("mouseout", () => this.hideLoginHover());
    this.shippingMenu.addEventListener("mouseover", () => this.showShippingHover());
    this.shippingMenu.addEventListener("mouseout", () => this.hideShippingHover());
  }

  showLoginHover() {
    modifyClassList(this.loginHover, "login__hover-show", "add");
    modifyClassList(this.dimmedLayer, "dimmed-layer__show", "add");
  }

  hideLoginHover() {
    modifyClassList(this.loginHover, "login__hover-show", "remove");
    modifyClassList(this.loginModal, "login__modal-show", "remove");
    modifyClassList(this.dimmedLayer, "dimmed-layer__show", "remove");
  }

  showShippingHover() {
    modifyClassList(this.shippingHover, "shipping__hover-show", "add");
    modifyClassList(this.dimmedLayer, "dimmed-layer__show", "add");
    modifyClassList(this.loginModal, "login__modal-show", "remove");
  }

  hideShippingHover() {
    modifyClassList(this.shippingHover, "shipping__hover-show", "remove");
    modifyClassList(this.dimmedLayer, "dimmed-layer__show", "remove");
  }
}

export { Navigation };
