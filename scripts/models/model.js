export const state = {
  recommendedTerms: [],
  autoCompletedTerms: [],
  searchHistory: [],
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
  const searchHistory = JSON.parse(
    window.localStorage.getItem("searchHistory")
  );

  if (!searchHistory) {
    state.searchHistory = [];
    return;
  }

  state.searchHistory = searchHistory;
};

export const saveSearchHistory = (searchTerm) => {
  state.searchHistory.push(searchTerm);

  window.localStorage.setItem(
    "searchHistory",
    JSON.stringify(state.searchHistory)
  );
};
