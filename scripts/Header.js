import { DimmedMain } from "./Dimmed";

export default class Header {
  constructor() {
    this.logInAnchor = document.querySelector(".header__anchor--login");
    this.expandedLogInPopUp = document.querySelector(".pop-up__expanded");
    this.logInPopUp = document.querySelector(".pop-up--login");
    this.loginContainer = document.querySelector(".container--login");

    this.shippingAddressAnchor = document.querySelector(
      ".header__anchor--shipping-address"
    );
    this.shippingAddressPopUp = document.querySelector(
      ".pop-up--shipping-address"
    );
    this.shippingAddressContainer = document.querySelector(
      ".container--shipping-address"
    );

    this.dimmedMain = new DimmedMain();
  }

  showPopUpWithDelay(delay) {
    setTimeout(() => {
      this.showLogInPopUp();
    }, delay);
  }

  showLogInPopUp() {
    this.logInPopUp.classList.remove("hidden");
  }

  hideLogInPopUp() {
    this.logInPopUp.classList.add("hidden");
  }

  showExpandedLogInPopUp() {
    this.showLogInPopUp();
    this.dimmedMain.showDimmedMain();
    this.expandedLogInPopUp.classList.remove("hidden");
  }

  hideExpandedLogInPopUp() {
    this.hideLogInPopUp();
    this.dimmedMain.hideDimmedMain();
    this.expandedLogInPopUp.classList.add("hidden");
  }

  showShippingAddressPopUp() {
    this.dimmedMain.showDimmedMain();
    this.shippingAddressPopUp.classList.remove("hidden");
  }

  hideShippingAddressPopUp() {
    this.dimmedMain.hideDimmedMain();
    this.shippingAddressPopUp.classList.add("hidden");
  }

  setHeader() {
    this.showPopUpWithDelay(1000);

    this.logInAnchor.addEventListener("mouseenter", () => {
      this.showExpandedLogInPopUp();
    });
    this.loginContainer.addEventListener("mouseleave", () => {
      this.hideExpandedLogInPopUp();
    });
    this.shippingAddressAnchor.addEventListener("mouseenter", () => {
      this.showShippingAddressPopUp();
    });
    this.shippingAddressContainer.addEventListener("mouseleave", () => {
      this.hideShippingAddressPopUp();
    });
  }
}
