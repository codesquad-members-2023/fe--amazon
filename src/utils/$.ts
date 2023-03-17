const $ = (selector: string, parent: HTMLElement | Document = document): HTMLElement | null => {
  return parent.querySelector(selector);
};

export default $;