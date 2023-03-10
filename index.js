window.addEventListener('load', () => {
  const loginPointer = document.querySelector(".modal__pointer1");
  const loginModal1 = document.querySelector(".modal__login1");
  
  // 1초 뒤에 modal_login, modal_path, modal_pointer 요소를 보이게 함
  setTimeout(function() {
    loginPointer.style.display = 'block';
    loginModal1.style.display = 'block';
  }, 1000)
  
  const loginButton = document.querySelector(".nav-top__account-link");

  loginButton.addEventListener("mouseover", () => {
    loginModal1.style.display = 'none';
    dimLayer.style.display = 'block';
  })
  
  /*     딤처리 부분      */
  // location 버튼 영역 변수화
  const locationButton = document.querySelector(".nav-top__link");
  const locationModal = document.querySelector(".modal__location");

  // login 버튼 영역 변수화
  const loginModal2 = document.querySelector(".modal__login2");
  const loginPath = document.querySelector(".modal__path2");
  const dimLayer = document.querySelector(".dim__layer");

  const modalLayout = [locationButton, locationModal, loginButton, loginModal2, loginPath];

  modalLayout.forEach((event) => {
    event.addEventListener("mouseover", () => {
      dimLayer.style.display = 'block';
    })
  })

  modalLayout.forEach((event) => {
    event.addEventListener("mouseout", () => {
      dimLayer.style.display = 'none';
    })
  })
})




