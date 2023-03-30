const track = new Track();
const banners = new Banner();
banners.setBanners();
track.addEvent();

const bannerTimer = () =>
  setInterval(() => {
    track.moveTrack("left");
  }, 10000);

bannerTimer();
