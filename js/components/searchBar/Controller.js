import DataModel from './dataModel.js';
import LogicModel from './logicModel.js';
import View from './View.js';

class Controller {
  constructor() {
    this.dataModel = new DataModel();
    this.logicModel = new LogicModel();
    this.view = new View();
  }

  init() {
    // 초기 검색창 만들기.
    this.view.searchBarAddEvent(this.logicModel.searchBarFocusEvent);
    // this.view.searchBarBtnAddEvent(this.logicModel.searchBarBtnClickEvent);
  }
}

const controller = new Controller();
controller.init();
