import $ from '../core';

$.prototype.animation = function(duration, draw, timing) {
  let start = performance.now();
  let progress;

  requestAnimationFrame(function animate(time) {
    const timeElapsed = time - start;
    // from 0 to 1
    const completed = Math.min(timeElapsed / duration, 1);

    if (typeof timing === "function") progress = timing(completed);
    else progress = completed;

    draw(progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animate);
    }
  })
}