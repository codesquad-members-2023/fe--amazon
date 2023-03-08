const logInAnchor = document.querySelector(".header__anchor--login");
const logInPopUp = document.querySelector(".pop-up--login");
const seperatorLine = document.querySelector(".seperator-line");
const list = document.querySelector(".list");
const container = document.querySelector(".container");
const dimmed = document.querySelector(".dimmed");

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
    dimmed.classList.remove("hidden");
  });

  container.addEventListener("mouseleave", () => {
    logInPopUp.classList.add("hidden");
    dimmed.classList.add("hidden");
  });

  showPopUpWithDelay(1000);
}

main();
