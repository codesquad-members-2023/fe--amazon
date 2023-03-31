import $ from '../common/$'
import dim from '../common/dim.js'

function getSearchListElements() {
  const input = $('.search-input')
  const searchList = $('.search-list')
  const searchSection = $('.search-container')

  return {
    input,
    searchList,
    searchSection
  }
}

(function searchListHandler() {
  const { input, searchList } = getSearchListElements()

  input.addEventListener('click', () => {
    searchList.classList.remove('hidden')
    dim.classList.remove('hidden')
  })
})()

export default function closeSearchList (target) {
  const { searchList, searchSection } = getSearchListElements()
  
  if(!searchSection.contains(target)) {
    searchList.classList.add('hidden')
    dim.classList.add('hidden')
  }
}
