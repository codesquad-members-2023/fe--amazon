const $ = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

export default $;