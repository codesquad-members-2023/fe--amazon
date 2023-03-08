// login 팝업 element
const logInAnchor = document.querySelector(".header__anchor--login");
const seperatorLine = document.querySelector(".seperator-line");
const list = document.querySelector(".list");
const logInPopUp = document.querySelector(".pop-up--login");
const loginContainer = document.querySelector(".container--login");

// 배송지 팝업 element
const shippingAddressAnchor = document.querySelector(
  ".header__anchor--shipping-address"
);
const shippingAddressPopUp = document.querySelector(
  ".pop-up--shipping-address"
);
const shippingAddressContainer = document.querySelector(
  ".container--shipping-address"
);

const dimmed = document.querySelector(".dimmed");

function showPopUpWithDelay(delay) {
  setTimeout(() => {
    logInPopUp.classList.remove("hidden");
  }, delay);
}

function main() {
  showPopUpWithDelay(1000);

  // login 레이어 팝업 mouseenter
  logInAnchor.addEventListener("mouseenter", () => {
    seperatorLine.classList.remove("hidden");
    list.classList.remove("hidden");
    logInPopUp.classList.remove("hidden");
    dimmed.classList.remove("hidden");
  });

  // login 레이어 팝업 mouseleave
  loginContainer.addEventListener("mouseleave", () => {
    logInPopUp.classList.add("hidden");
    dimmed.classList.add("hidden");
  });

  shippingAddressAnchor.addEventListener("mouseenter", () => {
    shippingAddressPopUp.classList.remove("hidden");
    dimmed.classList.remove("hidden");
  });

  shippingAddressContainer.addEventListener("mouseleave", () => {
    shippingAddressPopUp.classList.add("hidden");
    dimmed.classList.add("hidden");
  });
}

main();
