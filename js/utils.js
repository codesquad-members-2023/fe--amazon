const $ = (selector) => document.querySelector(selector);

const modifyClassList = (selector, className, action) => selector.classList[action](className);

const _ = {
  show: (target) => (target.style.display = "block"),
  hide: (target) => (target.style.display = "none"),
};

export { $, modifyClassList, _ };
