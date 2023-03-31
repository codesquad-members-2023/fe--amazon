export class SideBarExtraCategory {
  constructor(extraCategories){
    this.extraCategories = extraCategories;
    this.emptyString = '';
  }

  makeLayer(){
    return Object.entries(this.extraCategories).map(([categoriesId, categories]) => this.makeContainer(categoriesId, categories));
  }

  makeContainer(categorieId, category){
    return `<div class="sidebar__category extra" data-category-id="${categorieId}"">
              <div class="sidebar__category__menu">${this.makeChildNodes(category)}</div>
            </div>`
  }
 
  makeChildNodes(categories){
    return categories.reduce((acc, { name, id }, index) => {
      if(index < categories.length - 1){
        acc += `
          <a class="sidebar__contents" href="#" data-contents-id="${id}">
            ${name}<img src="asset/sidebar/rightdir.svg" alt="" />
          </a>`
      } else acc += this.detailTailPartHtml(name, id);
      return acc;
    }, this.emptyString);
  }

  detailTailPartHtml(name, id){
    return `
      <a class="sidebar__contents" href="#" data-contents-id="${id}">
        ${name}<img src="asset/sidebar/rightdir.svg" alt="" />
      </a>
      <a href="" class="sidebar__contents__btn closeall" onclick="return false;">
        간략히 보기<img src="asset/sidebar/upperdir.svg" alt="">
      </a>`
  }
}


