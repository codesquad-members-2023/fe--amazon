const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => parent.querySelectorAll(selector);

export { $, $$ };

