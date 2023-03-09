
const openButton = document.querySelector('.all-menu')
const sideMenu = document.querySelector('.side-menu')

openButton.addEventListener('click', () => {
  sideMenu.style.display = 'block'
})

const closeButton = document.querySelector('.side-menu__close')

closeButton.addEventListener('click', () => {
  sideMenu.style.display = 'none'
})

const body = document.querySelector('body')
body.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !openButton.contains(e.target)) {
    sideMenu.style.display = 'none'
  }
})