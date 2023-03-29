import API from '../../utils/server.js';

//SearchStore
class DataModel {
  searchData;
  constructor() {
    this.getData(API.GET_SEARCH_DATA);
    this.recentSearchList = new Set();
  }

  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => (this.searchData = data))
      .catch((error) => console.error(`error: `, error.message));
  }

  /**
   * 최근 검색내역을 배열로 return해주는 메서드
   * @returns 최금 검색내역 배열
   */
  getRecentSearchList() {
    return Array.from(this.recentSearchList);
  }

  /**
   * 검색한 내역을 최근 검색내역에 추가하는 메서드
   * @param {*} search
   */
  setRecentSearchList(searchLog) {
    searchLog = searchLog.trim();
    if (searchLog !== '') this.recentSearchList.add(searchLog);
  }
}

export default DataModel;
