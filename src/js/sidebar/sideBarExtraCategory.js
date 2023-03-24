export class sideBarExtraCategory {
  constructor(extraCategories){
    this.extraCategories = extraCategories;
    this.emptyString = '';
  }

  makeLayer(){
    return this.extraCategories.reduce((acc, categories) => 
        acc + `<div class="sidebar__category extra">
                 <div class="sidebar__category__menu">${this.makeDetail(categories)}</div>
               </div>`
    , this.emptyString);
  }

  makeDetail(categories){
    return categories.reduce((acc, { name, id }, index) => {
      if(index < categories.length - 1){
        acc += `
          <a class="sidebar__contents" href="#" data-category-id="${id}">
            ${name}<img src="asset/sidebar/rightdir.svg" alt="" />
          </a>`
      } else {
        acc += `
          <a class="sidebar__contents" href="#" data-category-id="${id}">
            ${name}<img src="asset/sidebar/rightdir.svg" alt="" />
          </a>
          <a href="" class="sidebar__contents__btn closeall" onclick="return false;">
            간략히 보기<img src="asset/sidebar/upperdir.svg" alt="">
          </a>`
      }
      return acc;
    }, this.emptyString);
  }
}


