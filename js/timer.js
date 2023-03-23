class Timer {
  constructor(timeSlice) {
    this.timeSlice = timeSlice;
    this.requestId = null;
  }
  playAnimation(animation) {
    this.requestId = window.requestAnimationFrame(animation);
  }
  resetAnimation(animation) {
    window.cancelAnimationFrame(this.requestId);
    this.requestId = window.requestAnimationFrame(animation);
  }
}

export default Timer;
