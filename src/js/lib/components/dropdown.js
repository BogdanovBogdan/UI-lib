import $ from '../core';

$.prototype.dropdown = function() {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).click(() => {
      $(this[i].nextElementSibling).fadeToggle(100);
    })
  }
}

$('.dropdown-toggle').dropdown();