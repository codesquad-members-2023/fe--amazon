const track = new Track();
const banners = new Banner();
banners.setBanners();
track.addEvent();

setInterval(() => {
  track.moveTrack("left");
}, 10000);
