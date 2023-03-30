import API from '../../utils/serverConstant.js';

//SearchStore
class DataModel {
  constructor() {
    this.getData(`${API.GET_SEARCH_DATA}?keywords_like=dog`);
    this.recentSearchList = new Set();
  }

  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // TODO : 로컬 스토리지가 아니라 계속 요청줘야함.
        this.saveToLocalStorage('searchData', data);
        console.log('데이터가 성공적으로 localStorage에 저장됐습니다!');
      })
      .catch((error) => console.error(`error: ${error.message}`));
  }

  saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
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
