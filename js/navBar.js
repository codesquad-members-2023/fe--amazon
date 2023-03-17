const dim = document.querySelector('.dim')
const shippingAddress = document.querySelector('.shipping-address')
const logInSection = document.querySelector('.log-in')
const logInModal = document.querySelector('.log-in .modal')

const extendLogInModal = () => {
  logInSection.addEventListener('mouseover', () => {
    logInModal.style.display = 'none'
    showDim(logInSection)
  })  
}

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

const actNavBar = () => {
  extendLogInModal()
  showDim(shippingAddress)
  showDim(logInSection)
  hideDim(shippingAddress)
  hideDim(logInSection)
}

actNavBar()