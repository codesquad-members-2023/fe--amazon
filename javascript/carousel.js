const setImg = () => {
  const CAROUSELCOUNT = 6;
  const directoryPath = '/asset/images/carousel';
  const imageFiles = Array.from({ length : CAROUSELCOUNT }, (_, i) => i);

  let imgTemplate = '';
  imageFiles.forEach(number => {
    const img = `<img src="${directoryPath}/${number}.jpg" alt="carousel 배경이미지">`;
    imgTemplate += img;
  });

  const $carousel_container = document.querySelector('.image_box');
  $carousel_container.insertAdjacentHTML('afterbegin', imgTemplate);
}

setImg();