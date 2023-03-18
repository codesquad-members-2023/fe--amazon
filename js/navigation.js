function showModalAfterTimeout() {
  setTimeout(() => {
    const loginModal = document.querySelector(".login-modal");
    loginModal.classList.add("visible");
  }, 1000);
}

function appendLoginHoverList() {
  const loginHoverList = document.querySelector(".hover-list1");
  const loginHoverAccount = document.querySelector(".hover-list2");

  loginListItems.forEach((el) => loginHoverList.insertAdjacentHTML("beforeend", `<li>${el}</li>`));
  accountMenuItems.forEach((el) => loginHoverAccount.insertAdjacentHTML("beforeend", `<li>${el}</li>`));
}

function loginMenuHover() {
  const loginMenu = document.querySelector(".login-menu");
  const loginHover = document.querySelector(".login-hover");
  const dimmed = document.querySelector(".dimmed");
  const loginModal = document.querySelector(".login-modal");

  loginMenu.addEventListener("mouseover", () => {
    loginHover.style.display = "block";
    dimmed.style.display = "block";
  });

  loginMenu.addEventListener("mouseout", () => {
    loginHover.style.display = "none";
    loginModal.style.display = "none";
    dimmed.style.display = "none";
  });
}

function shippingHover() {
  const shippingHover = document.querySelector(".shipping-hover");
  const shippingCountry = document.querySelector(".shipping-country");
  const dimmed = document.querySelector(".dimmed");
  const loginModal = document.querySelector(".login-modal");

  shippingCountry.addEventListener("mouseover", () => {
    shippingHover.style.display = "block";
    dimmed.style.display = "block";
    loginModal.style.display = "none";
  });

  shippingCountry.addEventListener("mouseout", () => {
    shippingHover.style.display = "none";
    dimmed.style.display = "none";
  });
}

appendLoginHoverList();
showModalAfterTimeout();
loginMenuHover();
shippingHover();
