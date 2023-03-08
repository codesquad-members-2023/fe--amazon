const logInLink = document.querySelector(".header__link--login");
const logInAnchor = document.querySelector(".header__anchor--login");
const logInPopUp = document.querySelector(".pop-up--login");
const seperatorLine = document.querySelector(".seperator-line");
const list = document.querySelector(".list");

function showPopUpWithDelay(delay) {
  setTimeout(() => {
    logInPopUp.classList.remove("hidden");
  }, delay);
}
function main() {
  logInAnchor.addEventListener("mouseenter", () => {
    seperatorLine.classList.remove("hidden");
    list.classList.remove("hidden");
    logInPopUp.classList.remove("hidden");
  });

  logInLink.addEventListener("mouseleave", () => {
    logInPopUp.classList.add("hidden");
  });

  showPopUpWithDelay(1000);
}

main();
