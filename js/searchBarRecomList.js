function getData() {
  fetch("http://localhost:3000/goods")
    .then((response) => response.json())
    .then((data) => {
      const headerFlyout = document.querySelector("#header-flyout");

      const choiceKeywords = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        const randomPickKeywords = data[randomNumber].keywords;
        const div = `<div class="header-flyout-search"><i class="fa-solid fa-arrow-trend-up"></i>${randomPickKeywords}</div>`;
        headerFlyout.innerHTML += div;
      };

      const numberOfShowList = 10;
      for (let i = 0; i < numberOfShowList; i++) {
        choiceKeywords();
      }
    })
    .catch((error) => console.log(`fetch 에러! ${error}`));
}

getData();
