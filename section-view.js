const headerLogin = document.querySelector(".home__header__login");
const loginSection = document.querySelector(".section__login");
const loginSectionDetail = document.querySelector(".section__login2");
const dimmDiv = document.querySelector(".dimmed");

setTimeout(function () {
  loginSection.classList.add("visible");
  loginSection.classList.remove("hidden");
}, 1000);

const removeLoginSection = () => {
  loginSection.classList.remove("visible");
  loginSection.classList.add("hidden");
};

const showLoginSectionDetail = () => {
  loginSectionDetail.style.display = "flex";
  dimmDiv.classList.remove("hidden");
};

const hiddenLoginSectionDetail = () => {
  loginSectionDetail.style.display = "none";
  dimmDiv.classList.add("hidden");
};

headerLogin.addEventListener("mouseout", removeLoginSection);

headerLogin.addEventListener("mouseover", showLoginSectionDetail);
headerLogin.addEventListener("mouseout", hiddenLoginSectionDetail);
loginSectionDetail.addEventListener("mouseover", showLoginSectionDetail);
loginSectionDetail.addEventListener("mouseout", hiddenLoginSectionDetail);
