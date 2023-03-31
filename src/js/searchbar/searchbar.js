import { findUpWard, findSiblingForward } from "../utils.js";

export class SearchBar {
  constructor(){
    this.dimLayer = document.querySelector('.dim__layer');
    this.searchInput = document.querySelector('.nav-top__input');
    this.searchBar = findUpWard(this.searchInput, 'form');
    this.searchRecommendField = findSiblingForward(this.searchBar, 'nav-flyout__container');
  }

  addEvent(){
    this.searchInput.addEventListener('click', () => {
      this.searchRecommendField.style.display = 'block';
      this.dimLayer.classList.add('dim__main');
      this.getRecommandKeywords();
    });

    this.dimLayer.addEventListener('click', () => {
      this.searchRecommendField.style.display = 'none';
      this.dimLayer.classList.remove('dim__main');
    });

    this.searchInput.addEventListener('input', ()=> {
      this.getRecommandKeywords(this.searchInput.value)
    });
  }

  getRecommandKeywords(inputValue = 'iph&event=onKeyPress'){
    fetch(`https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${inputValue}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`)
      .then(response => response.json())
      .then(({ suggestions }) => {
        const valuesInArray = this.getValue(suggestions);
        const suggestionNodes = this.generateSuggestionNode(valuesInArray);
        this.renderingInResultField(suggestionNodes);
      })
  }

  getValue(suggestions){
    return suggestions.map((obj) => obj.value);
  }

  generateSuggestionNode(valuesInArray){
    return valuesInArray.reduce((acc, value) => 
      acc + `<div class="suggestion-container">
               ${value}
             </div>`, '')
  }

  renderingInResultField(suggestionNodes){
    this.searchRecommendField.innerHTML = suggestionNodes;
  }
}
