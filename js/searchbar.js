import $ from './common/$.js'
import dim from './common/dim.js'

const input = $('.search-input')
const searchList = $('.search-list')

input.addEventListener('click', () => {
  searchList.classList.remove('hidden')
  dim.classList.remove('hidden')
})

export default function closeSearchList (target) {
  const searchSection = $('.search-container')
  
  if(!searchSection.contains(target)) {
    searchList.classList.add('hidden')
    dim.classList.add('hidden')
  }
}
