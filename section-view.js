const headerLogin = document.querySelector(".home__header__login");
const loginSection = document.querySelector(".section__login");
const loginSectionDetail = document.querySelector(".section__login2");

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
};

const hiddenLoginSectionDetail = () => {
  loginSectionDetail.style.display = "none";
};

headerLogin.addEventListener("mouseout", removeLoginSection);

headerLogin.addEventListener("mouseover", showLoginSectionDetail);
loginSectionDetail.addEventListener("mouseover", showLoginSectionDetail);
loginSectionDetail.addEventListener("mouseout", hiddenLoginSectionDetail);
headerLogin.addEventListener("mouseout", hiddenLoginSectionDetail);
