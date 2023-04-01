const track = new Track();
const banners = new Banner();
banners.setBanners();
track.addEvent();

const bannerUIMoveTime = 10000;

const bannerTimer = () =>
  setInterval(() => {
    track.moveTrack("left");
  }, bannerUIMoveTime);

bannerTimer();
