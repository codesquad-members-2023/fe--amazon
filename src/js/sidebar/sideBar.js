import { sideBarMainMenu } from "./sideBarMainMenu.js";
import { sideBarExtraMenu } from "./sideBarExtraMenu.js";

export class sideBar {
  constructor(data, html){
    this.data = data;
    this.html = html;
  }

  init(){
    this.getMenuHtml();
    this.attachMenus();
  }

  getMenuHtml(){
    [this.mainMenu, this.extraCategories] = new sideBarMainMenu(this.data).makeLayer();
    this.extraMenu = new sideBarExtraMenu(this.extraCategories).makeLayer();
  }

  attachMenus(){
    const sidebarMenuMain = document.querySelector('.sidebar__menu.main');
    sidebarMenuMain.innerHTML = this.mainMenu;

    const ifExtraMenuNeed = [];
    this.data.forEach(({id, categories}) => {
      if(categories.length >= 4) ifExtraMenuNeed.push(id);
    });

    ifExtraMenuNeed.forEach(id => {
      const category = document.querySelector(`.sidebar__category.${id}`);
      category.insertAdjacentHTML('afterend', this.extraMenu);
    });
  }
}