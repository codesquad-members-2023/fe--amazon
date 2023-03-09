const openButton = document.querySelector('.all-menu')
const sideMenu = document.querySelector('.side-menu')


openButton.addEventListener('click', () => {
  sideMenu.style.display = 'block'
  dim.style.display = 'block'
  dim.style.top = '-85px'
})

const closeButton = document.querySelector('.side-menu__close')

closeButton.addEventListener('click', () => {
  sideMenu.style.animation = 'slide-hide .5s forwards'
  dim.style.display = 'none'
})

const body = document.querySelector('body')
body.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !openButton.contains(e.target)) {
    sideMenu.style.animation = 'slide-hide .5s forwards'
    dim.style.display = 'none'
  }
})

