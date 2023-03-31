import $ from './$.js'
import dim from './dim.js'

(function closeElement() {
  const body = $('body')
  const sideMenu = $('.side-menu')
  const searchList = $('.search-list')

  body.addEventListener('click', ({ target }) => {
    if (dim === target) {
      dim.classList.add('hidden')
      dim.classList.remove('dim-all')
      sideMenu.style.animation = 'slide-hide .5s forwards'
      searchList.classList.add('hidden')
    }    
  })
})()
