import { ALL_SELECTORS } from "../allQuery.js";

const clearDimmedNav = () => (ALL_SELECTORS.dimmed.style.display = "none");
const dimmedNav = () => (ALL_SELECTORS.dimmed.style.display = "block");
const dimmedNavEvent = () => {
  ALL_SELECTORS.loginMenu.addEventListener("mouseout", clearDimmedNav);
  ALL_SELECTORS.shippingMenu.addEventListener("mouseout", clearDimmedNav);
  ALL_SELECTORS.loginMenu.addEventListener("mouseover", dimmedNav);
  ALL_SELECTORS.shippingMenu.addEventListener("mouseover", dimmedNav);
};

dimmedNavEvent();
