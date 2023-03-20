setTimeout(() => {
  const el = document.querySelector(".login__modal-fadeIn");
  el.classList.add("visible");
}, 1000);

function appendLoginHoverList() {
  const $loginHoverList = document.querySelector(".list__items");
  const $loginHoverAccount = document.querySelector(".accounts__items");

  loginListItems.forEach((el) => $loginHoverList.insertAdjacentHTML("beforeend", `<li>${el}</li>`));
  accountMenuItems.forEach((el) => $loginHoverAccount.insertAdjacentHTML("beforeend", `<li>${el}</li>`));
}


