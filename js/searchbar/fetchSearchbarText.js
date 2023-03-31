import $ from '../common/$.js'

function customURL(query = 'iph&event=onKeyPress') {
  return `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=8&prefix=${query}&limit=10&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1615209935015`
}

function getElements() {
  const searchInput = $('.search-input')
  const searchList = $('.search-list')

  return {
    searchInput,
    searchList
  }
}

(function addEvents() {
  const { searchInput } = getElements()

  searchInput.addEventListener('input', () => {
    fetchAutoCompleteText(searchInput.value)
  })
  
  searchInput.addEventListener('click', () => {
    fetchRecomendationSearchText()
  }, { once : true })
})()

function fetchAutoCompleteText(searchText) {
  const URL = customURL(searchText)

  fetch(URL)
    .then((res) => res.json())
    .then((words) => words.suggestions.map(word => word.value))
    .then(console.log)
    // TODO: 자동완성된 배열을 받아서 element로 만들기
}

function fetchRecomendationSearchText() {
  const URL = customURL()

  fetch(URL)
    .then(res => res.json())
    .then(res => res.suggestions.map(data => data.value))
    .then(data => createRecommandationList(data))
}

function createRecommandationList(words) {
  words.forEach((word) => {
    const parent = $('.search-recomendation')
    const div = document.createElement('div')
    
    div.textContent = word
    div.classList.add('search-item')

    parent.appendChild(div)
  })
}
