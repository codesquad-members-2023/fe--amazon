import { sideBarMainCategory } from "./sideBarMainCategory.js";
import { sideBarExtraCategory } from "./sideBarExtraCategory.js";

export class SideBar {
  constructor(responsedData){
    this.responsedData = responsedData;
  }

  init(){
    this.generateCategoryNode();
    this.attachMainCategory();
    this.attachExtraCategory();
  }

  generateCategoryNode(){
    [this.mainCategory, this.extraCategories] = new sideBarMainCategory(this.responsedData).makeLayer();
    this.extraCategory = new sideBarExtraCategory(this.extraCategories).makeLayer();
  }

  attachMainCategory(){
    const sideBarMainCategory = document.querySelector('.sidebar__menu.main');
    sideBarMainCategory.innerHTML = this.mainCategory;
  }
   
  attachExtraCategory(){
    const EXTRA_MAIN_THRESHOLD = 4;
    const idsToAttachExtraCategory = this.responsedData.reduce((targets, { id, categories }) => {
      if(categories.length >= EXTRA_MAIN_THRESHOLD) targets.push(id)
      return targets;
    }, []);

    idsToAttachExtraCategory.forEach(id => {
      const category = document.querySelector(`.sidebar__category.${id}`);
      category.insertAdjacentHTML('afterend', this.extraCategory);
    });
  }
}