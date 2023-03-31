function getSearchData() {
  fetch("http://localhost:3000/goods")
    .then((response) => response.json())
    .then((data) => {
      const searchBarFlyout = new SearchbarFlyout(data);

      const numberOfShowList = 10;
      for (let i = 0; i < numberOfShowList; i++) {
        searchBarFlyout.makeRecomKeywordsEl();
      }

      searchBarFlyout.getUserKeywords();
      searchBarFlyout.addEvent();
    })
    .catch((error) => console.log(`fetch 에러! ${error}`));
}

getSearchData();
