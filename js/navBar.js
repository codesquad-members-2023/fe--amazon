import $ from './$.js'

const dim = $('.dim')
const shippingAddress = $('.shipping-address')

const removeHidden = (...elements) => element.classList.remove('hidden')
const addHidden = (...elements) => {
  elements.forEach(element => element.classList.add('hidden'))
}

const loginModalHandler = () => {
  const DELAY_TIME = 1000
  const logInSection = $('.log-in')
  const logInPointer = $('.log-in .pointer')
  const logInModal = $('.log-in .modal')
  
  window.addEventListener('load', setTimeout(() => {
    logInModal.setAttribute('id', 'modal__visibility')
  }, DELAY_TIME))

  logInSection.addEventListener('mouseover', () => {
    addHidden(logInPointer, logInModal)
  })

  // TODO: 확장 모달 띄우기
  // TODO: 로그인 모달에 애니메이션 주기
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
  loginModalHandler()
  // onExtendLoginModal()
  showDim(shippingAddress)
  showDim(logInSection)
  hideDim(shippingAddress)
  hideDim(logInSection)
}

actNavBar()