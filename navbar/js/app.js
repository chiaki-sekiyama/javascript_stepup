'use strict';
/* WindowsPC使用 */

const offset = $('#navbar').offset().top;
const nav_height = $('#navbar').outerHeight();
$(window).scroll(function() {
  if($(this).scrollTop() > offset) {
    $('body').css('padding-top', nav_height);
    $('#navbar').addClass('fixed');
  } else {
    $('body').css('padding-top', 0);
    $('#navbar').removeClass('fixed');
  }
});