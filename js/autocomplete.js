import $ from './common/$.js'

const searchInput = $('.search-input') // input
const searchList = $('.search-list') // container

function getSearchText() {
  const prevSearchText = searchInput.value
  checkSearchText(prevSearchText)
}

function checkSearchText(prevSearchText) {
  setTimeout(() => {
    const currentSearchText = searchInput.value
    console.log(currentSearchText)

    if (prevSearchText !== currentSearchText) {
      fetchSearchText(currentSearchText)
      getSearchText()
    }
    if (prevSearchText === currentSearchText) {
      getSearchText()
    }
    if (currentSearchText === "") {
      // search list hidden 처리
      // 재귀? 정지
      console.log('clear!')
    }
  }, 5000)
}

function fetchSearchText(searchText) {
  const API_URL = `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=8&prefix=${searchText}&limit=11&fb=1&suggestion-type=KEYWORD&suggestion-type=WIDGET&_=1615209935015`
  
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data.suggestions.map((v) => v.value))
    .then(console.log)
}

// getSearchText() // 호출은 이벤트 등록으로 입력 시작 시 발동하도록

{/* <div class="search-list hidden">
  <div class="search-item">apple</div>
  <div class="search-item">banana</div>
  <div class="search-item">cherry</div>
</div> */}
 // user input value
