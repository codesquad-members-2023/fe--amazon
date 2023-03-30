class LogicModel {
  // 비지니스 로직.
  constructor() {
    this.searchData = this.getSearchData();
    this.keywords = this.getKeywordsFromSearchData();
    this.CHUNK_SIZE = 10;
  }

  searchBarFocusEvent(event) {
    console.log(event);
  }

  searchBarBtnClickEvent(event) {
    console.log(event);
  }

  getSearchData() {
    return JSON.parse(localStorage.getItem('searchData'));
  }

  findChunkSizeKeywords(inputData) {
    const matchingData = this.keywords.filter((item) =>
      item.includes(inputData),
    );
    console.log(this.sliceChunkSizeKeywords(matchingData, this.CHUNK_SIZE));
    return this.sliceChunkSizeKeywords(matchingData, this.CHUNK_SIZE);
  }

  sliceChunkSizeKeywords(matchingData, chunkSize) {
    // TODO : 검색한 횟수를 넣으면 검색한 횟수를 기준으로 sort한 뒤 최대 10개로 자르기.
    // slice로 자르면 원본 배열 변경 X
    return matchingData.length > chunkSize
      ? matchingData.slice(0, chunkSize)
      : matchingData;
  }

  getKeywordsFromSearchData() {
    // keywords 중 겹치는 keyword 삭제후 배열로 리턴.
    const keywords = new Set(
      this.searchData['data'].map((item) => item['keywords']),
    );
    return Array.from(keywords);
  }
}

export default LogicModel;
