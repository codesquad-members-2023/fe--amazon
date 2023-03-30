import * as model from "../models/model";
import autoCompletedSearchView from "../views/autoCompletedSearchView";
import inputSearchView from "../views/inputSearchView";

const controlRecommendedTerms = async () => {
  await model.loadRecommendedTerms();
  model.loadSearchHistory();

  autoCompletedSearchView.renderRecommended(
    model.state.searchHistories.slice(0, 5),
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
};

const controlBlurInput = () => {
  autoCompletedSearchView.clear();
};

const controlDeleteHistory = (historyId) => {
  model.deleteSearchHistory(historyId);
  autoCompletedSearchView.renderRecommended(
    model.state.searchHistories.slice(0, 5),
    model.state.recommendedTerms
  );
};

const init = () => {
  autoCompletedSearchView.addHandlerClick(controlDeleteHistory);
  inputSearchView.addHandlerFocus(controlRecommendedTerms);
  inputSearchView.addHandlerBlur(controlBlurInput);
  inputSearchView.addHandlerInput(controlAutoCompletedTerms);
  inputSearchView.addHandlerSubmit(() => {
    model.saveSearchHistory(inputSearchView.getValue());
  });
};

init();
