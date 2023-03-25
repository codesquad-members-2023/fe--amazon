import { POPUP_DELAY_MILLI } from "./constants";
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

  handleMouseEnterLogInAnchor() {
    this.showLogInPopUp();
    this.dimmedMain.showDimmedMain();
    this.expandedLogInPopUp.classList.remove("hidden");
  }

  handleMouseLeaveLogInContainer() {
    this.hideLogInPopUp();
    this.dimmedMain.hideDimmedMain();
    this.expandedLogInPopUp.classList.add("hidden");
  }

  handleMouseEnterShippingAddressAnchor() {
    this.dimmedMain.showDimmedMain();
    this.shippingAddressPopUp.classList.remove("hidden");
  }

  handleMouseLeaveShippingAddressContainer() {
    this.dimmedMain.hideDimmedMain();
    this.shippingAddressPopUp.classList.add("hidden");
  }

  onHeader() {
    this.showPopUpWithDelay(POPUP_DELAY_MILLI);

    this.logInAnchor.addEventListener("mouseenter", () =>
      this.handleMouseEnterLogInAnchor()
    );
    this.loginContainer.addEventListener("mouseleave", () =>
      this.handleMouseLeaveLogInContainer()
    );
    this.shippingAddressAnchor.addEventListener("mouseenter", () =>
      this.handleMouseEnterShippingAddressAnchor()
    );
    this.shippingAddressContainer.addEventListener("mouseleave", () =>
      this.handleMouseLeaveShippingAddressContainer()
    );
  }
}
