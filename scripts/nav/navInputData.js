import { NAV } from "../all/allQuery.js";
import { LOGIN_EXTEND } from "../model/data.js";

const showLoginExtension = () => {
  NAV.LOGINMENU.addEventListener("mouseover", () => {
    if (!NAV.LOGIN_EXTENSION_LEFT.innerHTML) {
      LOGIN_EXTEND.left.forEach((data) => {
        NAV.LOGIN_EXTENSION_LEFT.insertAdjacentHTML("beforeend", `<li>${data}</li>`);
      });
    }
    if (!NAV.LOGIN_EXTENSION_RIGHT.innerHTML) {
      LOGIN_EXTEND.right.forEach((data) => {
        NAV.LOGIN_EXTENSION_RIGHT.insertAdjacentHTML("beforeend", `<li>${data}</li>`);
      });
    }
  });
};

const navEventListener = () => {
  showLoginExtension();
};
navEventListener();
