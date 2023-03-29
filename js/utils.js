const $ = (selector) => document.querySelector(selector);

const modifyClassList = (selector, className, action) => selector.classList[action](className);

export { $, modifyClassList };
