'use strict';
/* Windows使用 */

$(function() {
  $('.icon').on('click', function() {
    $(this).toggleClass('is-active', 200);
    $(this).parents('.list').find('.inner__list').fadeToggle(250);
  })
})