const track = new Track();
const banners = new Banner();
banners.setBanners();

track.leftBtn.addEventListener("click", track.moveTrack.bind(track, "left"));
track.rightBtn.addEventListener("click", track.moveTrack.bind(track, "right"));
