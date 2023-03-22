export class sideBarExtraMenu {
  constructor(extraCategories){
    this.extraCategories = extraCategories;
  }

  makeLayer(){
    let extraMenu = '';
    this.extraCategories.forEach(categories => {
      const categoryExtra = `
        <div class="sidebar__category extra">
          <div class="sidebar__category__menu">${this.makeDetail(categories)}</div>
        </div>`;
      extraMenu += categoryExtra;
    })
    return extraMenu;
  }

  makeDetail(categories){
    return categories.map(({name, id}, index) => {
      if(index < categories.length - 1){
        return `
          <a class="sidebar__contents" href="#" data-category-id="${id}">
            ${name}<img src="asset/rightdir.svg" alt="" />
          </a>`
      } else {
        return `
          <a class="sidebar__contents" href="#" data-category-id="${id}">
            ${name}<img src="asset/rightdir.svg" alt="" />
          </a>
          <a href="" class="sidebar__contents__btn closeall" onclick="return false;">
            간략히 보기<img src="asset/upperdir.svg" alt="">
          </a>`
      }
    }).join('')
  }
}


