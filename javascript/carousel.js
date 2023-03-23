const setCarouselImage = () => {
  const CAROUSELCOUNT = 6;
  const imageFiles = Array.from({ length : CAROUSELCOUNT }, (_, i) => i);

  const imgTemplate = imageFiles.reduce((acc, number) => {
    const directoryPath = '/asset/images/carousel';
    const img = `<img src="${directoryPath}/${number}.jpg" alt="carousel 배경이미지">`;
    acc += img;
    return acc;
  }, '');

  const $carousel_container = document.querySelector('.image_box');
  $carousel_container.insertAdjacentHTML('afterbegin', imgTemplate);
}

export { setCarouselImage };