const bannerSection = document.querySelector(".banner");

const bannerImgArray = [
  "bannerImg1",
  "bannerImg2",
  "bannerImg3",
  "bannerImg4",
  "bannerImg5",
  "bannerImg6",
];

function Banner(name) {
  this.name = name; // name 초기화
}

Banner.prototype.toBeElement = function () {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.classList.add("banner__column");
  img.classList.add("banner__img");
  img.src = `photo/${this.name}.jpg`;
  div.appendChild(img);
  bannerSection.appendChild(div);
};

bannerImgArray.forEach((imgName) => {
  const bannerElement = new Banner(`${imgName}`);
  bannerElement.toBeElement();
});
