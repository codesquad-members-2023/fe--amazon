import * as model from "./models/model";
import autoCompletedSearchView from "./views/autoCompletedSearchView";
import inputSearchView from "./views/inputSearchView";

const controlRecommendedTerms = async () => {
  await model.loadRecommendedTerms();
  model.loadSearchHistory();

  console.log(model.state.searchHistory);

  autoCompletedSearchView.render(
    model.state.recommendedTerms,
    model.state.searchHistory.slice(0, 5)
  );
};

const controlAutoCompletedTerms = async () => {
  const query = inputSearchView.getValue();

  if (!query) {
    await controlRecommendedTerms();
    return;
  }

  await model.loadAutoCompltedTerms(query);
  autoCompletedSearchView.render(model.state.autoCompletedTerms.slice(0, 10));
};

const init = () => {
  inputSearchView.addHandlerFocus(controlRecommendedTerms);
  inputSearchView.addHandlerBlur(() => autoCompletedSearchView.clear());
  inputSearchView.addHandlerInput(controlAutoCompletedTerms);
  inputSearchView.addHandlerSubmit(() => {
    model.saveSearchHistory(inputSearchView.getValue());
  });
};

init();
