const logInModal = document.querySelector('.log-in .modal')

window.addEventListener('DOMContentLoaded', () => {
  logInModal.style.animation = 'show-modal 1s forwards'
  logInModal.style.animationDelay = '1s'
})

const dim = document.querySelector('.dim')
const shippingAddress = document.querySelector('.shipping-address')
const logInSection = document.querySelector('.log-in')

logInSection.addEventListener('mouseover', () => {
  logInModal.style.display = 'none'
  dim.style.display = 'block'
})

const showDim = (element) => {
  element.addEventListener("mouseover", () => {
    dim.style.display = 'block'
  })
}
const hideDim = (element) => {
  element.addEventListener("mouseout", () => {
    dim.style.display = 'none'
  })
}

showDim(shippingAddress)
showDim(logInSection)
hideDim(shippingAddress)
hideDim(logInSection)