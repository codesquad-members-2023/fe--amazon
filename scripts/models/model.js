import { FIRST_CHILD_IDX, INITIAL_IDX } from "../constants";

export const state = {
  recommendedTerms: [],
  autoCompletedTerms: [],
  searchHistories: [],
  query: "",
  selectedIdx: INITIAL_IDX,
};

export const loadRecommendedTerms = async () => {
  try {
    // 밑에 함수랑 중복되는 부분 util로 빼기
    const url = "http://localhost:3001/recommend";
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const fetchedRecommendTerms = data.map((datumn) => {
      return {
        id: datumn.id,
        term: datumn.recommendTerm,
      };
    });

    state.recommendedTerms = fetchedRecommendTerms;
  } catch (e) {
    console.log(e);
  }
};

export const loadAutoCompltedTerms = async (query) => {
  try {
    state.query = query;

    const url = `http://localhost:3001/searched?searchedTerm_like=${query}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const fetchedAutoComplementedTerms = data.map((datumn) => {
      return {
        id: datumn.id,
        term: datumn.searchedTerm,
      };
    });

    state.autoCompletedTerms = fetchedAutoComplementedTerms;
  } catch (e) {
    console.log(e);
  }
};

export const loadSearchHistory = () => {
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

  if (!searchHistory) {
    state.searchHistories = [];
    return;
  }

  state.searchHistories = searchHistory;
};

export const saveSearchHistory = (searchTerm) => {
  const historyRecord = {
    id: Date.now(),
    term: searchTerm,
  };

  state.searchHistories.push(historyRecord);

  window.localStorage.setItem(
    "searchHistory",
    JSON.stringify(state.searchHistories)
  );
};

export const deleteSearchHistory = (id) => {
  state.searchHistories = state.searchHistories.filter(
    (history) => history.id !== id
  );

  localStorage.setItem("searchHistory", JSON.stringify(state.searchHistories));
};

export const setIdx = (direction, itemLength) => {
  state.selectedIdx += direction;

  if (state.selectedIdx < FIRST_CHILD_IDX) state.selectedIdx = itemLength;
  if (state.selectedIdx > itemLength) state.selectedIdx = FIRST_CHILD_IDX;
};

export const clearIdx = () => {
  state.selectedIdx = INITIAL_IDX;
};
