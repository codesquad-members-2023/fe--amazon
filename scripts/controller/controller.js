import * as model from "../models/model";
import autoCompletedSearchView from "../views/autoCompletedSearchView";
import inputSearchView from "../views/inputSearchView";

const controlRecommendedTerms = async () => {
  await model.loadRecommendedTerms();
  model.loadSearchHistory();

  autoCompletedSearchView.renderRecommended(
    model.state.searchHistories.slice(-5).reverse(),
    model.state.recommendedTerms
  );
};

const controlAutoCompletedTerms = async () => {
  const query = inputSearchView.getValue();

  if (!query) {
    await controlRecommendedTerms();
    return;
  }

  await model.loadAutoCompltedTerms(query);

  autoCompletedSearchView.renderAutoCompleted(
    model.state.autoCompletedTerms.slice(0, 10),
    query
  );

  model.clearIdx();
};

const controlBlurInput = () => {
  autoCompletedSearchView.clear();
};

const controlDeleteHistory = (historyId) => {
  model.deleteSearchHistory(historyId);
  autoCompletedSearchView.renderRecommended(
    model.state.searchHistories.slice(-5).reverse(),
    model.state.recommendedTerms
  );
};

const controlArrowKeyDown = (direction) => {
  const itemLength = autoCompletedSearchView.getItemLength();
  model.setIdx(direction, itemLength);
  const textContent = autoCompletedSearchView.renderSelectedItem(
    model.state.selectedIdx
  );

  if (!textContent) return;

  inputSearchView.setValue(textContent);
};

const init = () => {
  autoCompletedSearchView.addHandlerClick(controlDeleteHistory);
  inputSearchView.addHandlerFocus(controlRecommendedTerms);
  inputSearchView.addHandlerBlur(controlBlurInput);
  inputSearchView.addHandlerInput(controlAutoCompletedTerms);
  inputSearchView.addHandlerSubmit(() => {
    model.saveSearchHistory(inputSearchView.getValue());
  });

  inputSearchView.addHandlerKeyDown(controlArrowKeyDown);
};

init();
