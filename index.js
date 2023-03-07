const logIn = document.querySelector(".header__anchor--login");
const logInPopUp = document.querySelector(".pop-up--login");

function showPopUp() {
  setTimeout(() => {
    logInPopUp.classList.remove("hidden");
  }, 1000);
}
function main() {
  logIn.addEventListener("mouseover", () => {
    logInPopUp.classList.add("hidden");
  });

  showPopUp();
}

main();
