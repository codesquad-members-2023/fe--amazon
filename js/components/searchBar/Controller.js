import DataModel from './dataModel.js';
import LogicModel from './logicModel.js';
import View from './View.js';

class Controller {
  // addEventListener를 여기서 등록해야할까?
  constructor() {
    this.dataModel = new DataModel();
    this.logicModel = new LogicModel();
    this.view = new View();
  }

  init() {
    // 초기 검색창 만들기.
    this.view.searchBarAddFocusEvent();
    this.view.searchBarBtnAddClickEvent();
    this.view.searchBarAddInputEvent(
      this.logicModel.findChunkSizeKeywords.bind(this.logicModel),
    );
  }
}

const controller = new Controller();
controller.init();
