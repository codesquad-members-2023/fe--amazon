function Banner() {
  this.imgList = [
    "bannerImg1",
    "bannerImg2",
    "bannerImg3",
    "bannerImg4",
    "bannerImg5",
    "bannerImg6",
  ];
}

Banner.prototype.toBeElement = function (imgName) {
  const div = `<div class="banner__column">
                  <img class="banner__img" src="photo/${imgName}.jpg" />
               </div>`;
  track.element.innerHTML += div;
};

Banner.prototype.setBanners = function () {
  this.imgList.forEach((imgName) => {
    this.toBeElement(imgName);
  });
};
