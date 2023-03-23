const makeBanner = () => {
  const bannerTrack = document.querySelector(".banner__track");

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
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.classList.add("banner__column");
    img.classList.add("banner__img");
    img.src = `photo/${imgName}.jpg`;
    div.appendChild(img);
    bannerTrack.appendChild(div);
  };

  Banner.prototype.setBanners = function () {
    this.imgList.forEach((imgName) => {
      this.toBeElement(imgName);
    });
  };

  const banners = new Banner();
  banners.setBanners();
};

makeBanner();
