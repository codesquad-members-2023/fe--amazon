export class SideBarMainCategory {
  constructor(responsedData){
    this.responsedData = responsedData;
    this.extraCategories = [[]];
    this.emptyString = '';
  }

  makeLayer(){
    const mainCategoryNode = this.responsedData.reduce(
      (acc, { title, id, categories }) => 
        acc + `
        <div class="sidebar__category ${id}" data-category-id="${id}">
          <div class="sidebar__category__title">${title}</div>
          <div class="sidebar__category__menu">
            ${this.makeDetail(categories)}
          </div>
        </div>`
      , this.emptyString);
    return [mainCategoryNode, this.extraCategories];
  }

  makeDetail(categories) {
    const MAX_CATEGORIES = 4;
    return categories.reduce((acc, { name, id }, index) => {
        if(index < MAX_CATEGORIES) {
          acc += `
            <a class="sidebar__contents" href="#" data-contents-id="${id}">
              ${name}<img src="asset/sidebar/rightdir.svg" alt="" />
            </a>`;
        } else {
          this.extraCategories[0].push({ name, id });
          if (categories.length - 1 === index) {
            acc += `
              <a class="sidebar__contents__btn showall" onclick="return false;">
                모두 보기<img src="asset/sidebar/downwarddir.svg" alt="">
              </a>`;
          }
        }
        return acc;
      }, this.emptyString);
  }
}