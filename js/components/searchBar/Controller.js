import DataModel from './dataModel.js';
import LogicModel from './logicModel.js';
import View from './View.js';

class Controller {
  // addEventListener를 여기서 등록해야할까?
  constructor(dataModel, logicModel, view) {
    this.dataModel = dataModel;
    this.logicModel = logicModel;
    this.view = view;
  }

  init() {
    // 초기 검색창 만들기.
    this.view.searchBarAddFocusEvent(this.logicModel.suggestionData);
    this.view.searchBarBtnAddClickEvent();
    this.view.searchBarAddInputEvent(
      this.logicModel.findChunkSizeKeywords.bind(this.logicModel),
      this.logicModel.suggestionData,
    );
  }
}

const dataModel = new DataModel();
const logicModel = new LogicModel();
const view = new View();
const controller = new Controller(dataModel, logicModel, view);
controller.init();
