const header = () => {

  const onLoginModal = () => {
    const logInModal = document.querySelector('.log-in .modal')

    window.addEventListener('load', () => 
      logInModal.classList.add('appear__modal-login')
    )
  }

  const extendedLoginModalHandler = () => {
    const header = document.querySelector('header')
    const logInSection = document.querySelector('.log-in')
    const logInModal = document.querySelector('.log-in .modal')
    const shippingAddress = document.querySelector('.shipping-address')
    const shippingAddressModal = document.querySelector('.shipping-address .modal')

    header.addEventListener('mouseover', ({ target }) => {
      if (logInSection.contains(target)) {
        logInModal.classList.add('appear__modal-extended-login')
      }

      if (shippingAddress.contains(target)) {
        shippingAddressModal.classList.add('appear__')
      }
    })

    header.addEventListener('mouseout', ({ target: { className } }) => {

    })

  }

  onLoginModal()
}

header()