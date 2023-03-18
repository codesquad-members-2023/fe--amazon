// show log in modal when load 
window.addEventListener('load', () => {
  logInModal.style.animation = 'slow-appear 1s forwards'
  logInModal.style.animationDelay = '1s'
})

const headerEventHandler = (element) => {
  document.querySelector('header').addEventListener('mouseover', () => {
    console.log(element)
  })
}  