function Timer() {
  this.requestId = null;
}

Timer.prototype.playAnimation = function (animation) {
  this.requestId = window.requestAnimationFrame(animation);
};

Timer.prototype.resetAnimation = function (animation) {
  window.cancelAnimationFrame(this.requestId);
  this.playAnimation(animation);
};

export default Timer;
