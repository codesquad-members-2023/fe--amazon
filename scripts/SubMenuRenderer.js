import { subMenuConfig } from "./data";

export default class SubMenuRenderer {
  constructor(element) {
    this.container = element;
    this.subMenuConfig = subMenuConfig;
  }

  render() {
    const template = document.createElement("template");

    const domString = this.subMenuConfig.reduce(
      (domStringAcc, subMenuConfigItem) => {
        const subMenuItems = subMenuConfigItem.items.reduce(
          (subMenuItemsAcc, subMenuItem) => {
            subMenuItemsAcc += `
          <li class="side-bar__item">
            <button class="side-bar__button" href="">
              <span class="side-bar__text">${subMenuItem}</span>
            </button>
          </li>
        `;
            return subMenuItemsAcc;
          },
          ""
        );

        domStringAcc += `
        <div class="submenu hidden" data-parent-id="${subMenuConfigItem.parentId}">
          <div class="seperator-line"></div>
          <span class="side-bar__label">${subMenuConfigItem.label}</span>
          <ul class="side-bar__items">
            ${subMenuItems}
          </ul>
        </div>
      `;

        return domStringAcc;
      },
      ""
    );

    template.innerHTML = domString;
    this.container.appendChild(template.content);
  }
}
