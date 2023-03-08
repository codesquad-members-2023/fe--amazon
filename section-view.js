const headerLogin = document.querySelector(".home__header__login");
const loginSection = document.querySelector(".section__login");

setTimeout(function () {
  loginSection.classList.add("visible");
  loginSection.classList.remove("hidden");
}, 1000);

const removeLoginSection = () => {
  loginSection.classList.remove("visible");
  loginSection.classList.add("hidden");
};

headerLogin.addEventListener("mouseout", removeLoginSection);
