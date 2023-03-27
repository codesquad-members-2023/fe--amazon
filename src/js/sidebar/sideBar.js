import { SideBarMainCategory } from "./sideBarMainCategory.js";
import { SideBarExtraCategory } from "./sideBarExtraCategory.js";
import { SideBarOpenBtn } from "./sideBarOpenBtn.js";
import { SideBarLayer } from "./sideBarLayer.js";

export class SideBar {
  constructor(responsedData){
    this.responsedData = responsedData;
    this.sideBarLayer = document.querySelector(".sidebar__layer");
    this.dimLayer = document.querySelector(".dim__layer");
  }

  init(){
    this.generateCategoryNode();
    this.attachMainCategory();
    this.attachExtraCategory();
    this.addEvents();
  }

  generateCategoryNode(){
    [this.mainCategory, this.extraCategories] = new SideBarMainCategory(this.responsedData).makeLayer();
    this.extraCategory = new SideBarExtraCategory(this.extraCategories).makeLayer();
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

  addEvents(){
    const sideBarOpenBtn = new SideBarOpenBtn(this.sideBarLayer, this.dimLayer);
    sideBarOpenBtn.addClickEvt();
    const sideBarLayer = new SideBarLayer(this.responsedData, this.sideBarLayer, this.dimLayer);
    sideBarLayer.addClickEvt();
  }
}