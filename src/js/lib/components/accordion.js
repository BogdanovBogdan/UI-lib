import $ from '../core';

$.prototype.accordion = function() {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).click(() => {
      if (this[i].classList.contains('accordion-head--active')) {
        this[i].classList.remove('accordion-head--active');
        this[i].nextElementSibling.classList.remove('accordion-content--active');
        this[i].nextElementSibling.style.maxHeight = '0px';
      } else {
        const heightContent = this[i].nextElementSibling.firstElementChild.offsetHeight;
        this[i].classList.add('accordion-head--active');
        this[i].nextElementSibling.classList.add('accordion-content--active');
        this[i].nextElementSibling.style.maxHeight = `${heightContent}px`;
      }
    });
  }
}

$('.accordion-head').accordion();