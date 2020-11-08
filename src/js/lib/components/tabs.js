import $ from '../core';

$.prototype.tabs = function() {
  for (let i = 0; i < this.length; i++) {
    const tabItems = $(this[i]).find('.tab-item');
    const contentItems = $(this[i]).find('.tab-content');

    function onClick({ target }, index) {
      const targetTab = target;
      const siblingsTab = $(targetTab).siblings();
      const targetContent = contentItems[index];
      const sublingsContent = $(targetContent).siblings();

      for (let l = 0; l < siblingsTab.length; l++) {
        $(siblingsTab[l]).removeClass('tab-item--active')
      }
      for (let l = 0; l < sublingsContent.length; l++) {
        $(sublingsContent[l]).removeClass('tab-content--active')
      }
      $(targetTab).addClass('tab-item--active');
      $(targetContent).addClass('tab-content--active');
    }

    for (let j = 0; j < tabItems.length; j++) {
      $(tabItems[j]).click((e) => onClick(e, j))
    }

  }
}

$('.tab').tabs();