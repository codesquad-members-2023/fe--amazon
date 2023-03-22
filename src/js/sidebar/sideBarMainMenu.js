export class sideBarMainMenu {
  constructor(data){
    this.data = data;
    this.mainMenu = '';
    this.extraCategories = [[]];
  }

  makeLayer(){
    this.data.forEach(({title, id, categories}, index) => { 
      const category = `
        <div class="sidebar__category ${id}" data-category-id="${id}">
          <div class="sidebar__category__title">${title}</div>
          <div class="sidebar__category__menu">
            ${this.makeDetail(categories)}
          </div>
        </div>`;
      this.mainMenu += category;
    });
    return [this.mainMenu, this.extraCategories];
  }

  makeDetail(categories){
    return categories.map(({name, id}, total) => {
      if(total < 4){
        return `
        <a class="sidebar__contents" href="#" data-contents-id="${id}">
          ${name}<img src="asset/rightdir.svg" alt="" />
        </a>`
      } else {
        this.extraCategories[0].push({name, id});
        if(categories.length - 1 === total){
          return `
        <a class="sidebar__contents__btn showall" onclick="return false;">
          모두 보기<img src="asset/downwarddir.svg" alt="">
        </a>`
        }
      }
    }).join('')
  }
}