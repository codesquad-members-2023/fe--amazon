import API from '../../utils/serverConstant.js';
class LogicModel {
  // 비지니스 로직.
  constructor() {
    this.CHUNK_SIZE = 10;
  }

  async getMatchData(keyword) {
    let result;
    await fetch(`${API.GET_SEARCH_DATA}?keywords_like=${keyword}`)
      .then((response) => response.json())
      .then((data) => (result = data))
      .catch((error) => console.error(`error: ${error.message}`));
    return result;
  }

  getSearchData() {
    // TODO : 필요없음.
    return JSON.parse(localStorage.getItem('searchData'));
  }

  async findChunkSizeKeywords(inputData) {
    // TODO: 대소문자 구분하기 위해 item.includes 부분 정규식으로 바꾸기.
    let matchingData = await this.getMatchData(inputData);
    // console.log(this.sliceChunkSizeKeywords(matchingData, this.CHUNK_SIZE));
    matchingData = this.getKeywordsFromMatchingData(matchingData);
    return this.sliceChunkSizeKeywords(matchingData, this.CHUNK_SIZE);
  }

  sliceChunkSizeKeywords(matchingData, chunkSize) {
    // TODO : 검색한 횟수를 넣으면 검색한 횟수를 기준으로 sort한 뒤 최대 10개로 자르기.
    // slice로 자르면 원본 배열 변경 X
    return matchingData.length > chunkSize
      ? matchingData.slice(0, chunkSize)
      : matchingData;
  }

  getKeywordsFromMatchingData(matchingData) {
    // keywords 중 겹치는 keyword 삭제후 배열로 리턴.
    const result = new Set(matchingData.map((item) => item.keywords));
    return Array.from(result);
  }
}

export default LogicModel;
