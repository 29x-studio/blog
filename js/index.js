'use strict';
var x = window.scrollX;
var y = window.scrollY;


$('.icon_nav').click(function () {
  $('.icon_nav').toggleClass('cur');
  if( $('.icon_nav').hasClass('cur') ) {
    $('body').addClass('overflow_hidden');
    
    x = window.scrollX;
    y = window.scrollY;
    window.scrollTo(0,0);
  }else{
    $('body').removeClass('overflow_hidden');
    window.scrollTo(x,y);
  }
})