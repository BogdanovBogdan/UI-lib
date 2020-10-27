import $ from '../core';

$.prototype.fadeIn = function(duration, display) {
  for (let i = 0; i < this.length; i++) {

    const draw = (progress) => {
      this[i].style.display = display || 'block';
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
      if (progress === 1) this[i].style.display = 'none';
    }

    this.animation(duration, draw)
  }

  return this;
}

$.prototype.fadeToggle = function(duration, display) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this.fadeIn(duration, display);
    } else this.fadeOut(duration);

  }
}