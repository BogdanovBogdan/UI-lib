
import $ from '../core';


$.prototype.modal = function() {
  const modalOverlay = $('.overlay');

  modalOverlay.click(({ target }) => {
    if (target === modalOverlay[0]) modalOverlay.removeClass('overlay--active');
  })

  function openModal(modal) {
    modalOverlay.addClass('overlay--active');
    $(modal).addClass('modal--active');
  }

  function closeModal(modal) {
    modalOverlay.removeClass('overlay--active');
    $(modal).removeClass('modal--active');
  }

  for (let i = 0; i < this.length; i++) {
    const modal = $(this[i]).attr('data-target');
    const closeElements = $(modal).find('[data-close]');
    $(this[i]).on('click', (e) => { e.preventDefault(); openModal(modal); })
    closeElements.click((e) => { e.preventDefault(); closeModal(modal); })
  }
}

$('[data-toggle="modal"]').modal();