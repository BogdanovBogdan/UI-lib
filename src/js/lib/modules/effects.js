import $ from '../core';

$.prototype.fadeIn = function(duration) {
  for (let i = 0; i < this.length; i++) {

    const draw = (progress) => {
      this[i].style.opacity = progress;
    }

    this.animation(duration, draw)
  }

  return this;
}

$.prototype.fadeOut = function(duration) {
  for (let i = 0; i < this.length; i++) {

    const draw = (progress) => {
      this[i].style.opacity = 1 - progress;
    }

    this.animation(duration, draw)
  }

  return this;
}