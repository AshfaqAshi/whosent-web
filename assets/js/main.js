new WOW().init();

(function($) {
"use strict";

$(document).ready(function(){
  $('#btnStarted').click(function() {
    //alert('clicked!');
   // $(window).scrollTop( $("#contact").offset().top);
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1500);
    
    });
});


// Initiate the wowjs animation library
new WOW().init();

// Header scroll class
/*$(window).scroll(function() {
    
  
if ($(this).scrollTop() > 100) {
    $('.navbar').removeClass('navbar-light');
    $('.navbar').addClass('navbar-dark');
  $('.navbar').addClass('navbar-scrolled');
  
} else {
    $('.navbar').removeClass('navbar-dark');
    
    $('.navbar').addClass('navbar-light');
  $('.navbar').removeClass('navbar-scrolled');
}
});*/



})(jQuery);