export class SubMenu {
  constructor(responsedData, categoryId, contentsId){
    this.responsedData = responsedData;
    this.categoryId = categoryId;
    this.contentsId = contentsId;
    this.emptyString = '';
  }

  makeLayer(){
    return `
    <div class="sidebar__menu sub" data-contents-id="${this.contentsId}">
      <div class="sidebar__category sub">
        <div class="sidebar__category__menu">
          <a href="" class="sidebar__contents__btn close-right-menu" onclick="return false;">
            <img src="asset/sidebar/leftdir.svg" alt="" class="sidebar__submenu btn close-right-menu">
            주메뉴
          </a>
          <div class="sidebar__category__title">${this.contentsId}</div>
          ${this.makeDetail()}
        </div>
      </div>
    </div>
    `;
  }

  makeDetail(){
    const targetCategory = this.responsedData.find(({ id }) => id === this.categoryId).categories;
    const targetSubMenu = targetCategory.find(({ id }) => id === this.contentsId).subMenu;
    return targetSubMenu.reduce((acc, { categories }) => acc + this.makeSubMenuContents(categories), this.emptyString);
  }

  makeSubMenuContents(categories){
    return categories.reduce((acc, content) => acc + `<a href="" class="sidebar__contents sub">${content}</a>`, this.emptyString);
  }
}

