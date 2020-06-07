new WOW().init();

(function($) {
"use strict";

// Preloader (if the #preloader div exists)
$(window).on('load', function() {
if ($('#preloader').length) {
  $('#preloader').delay(100).fadeOut('slow', function() {
    $(this).remove();
  });
}
});

// Back to top button
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
  $('.back-to-top').fadeIn('slow');
} else {
  $('.back-to-top').fadeOut('slow');
}
});
$('.back-to-top').click(function() {
$('html, body').animate({
  scrollTop: 0
}, 1500, 'easeInOutExpo');
return false;
});

// Initiate the wowjs animation library
new WOW().init();
$(document).ready(function(){
    console.log('documet is ready');
    $("#navBar-toggle").click(function(){
        if($('.navbar-nav').hasClass('nav-scrolled')){
            //the toggle is on so 
        }
    });
});

// Header scroll class
$(window).scroll(function() {
    
if ($(this).scrollTop() > 100) {
    $('.navbar').removeClass('navbar-light');
   
    $('.navbar').addClass('navbar-dark');
  $('.navbar').addClass('navbar-scrolled');
  
} else {
    $('.navbar').removeClass('navbar-dark');
    
    $('.navbar').addClass('navbar-light');
  $('.navbar').removeClass('navbar-scrolled');
}
});




})(jQuery);