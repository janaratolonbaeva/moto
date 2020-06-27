$(document).ready(function () {

  // Mobile menu
  $('[data-sidenav]').sidenav();

  // slick slider
  $('.promo_slider').on('init', function(event, slick){
    $('.animated').addClass('activate slideInRight');
  });   

  $('.promo_slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    responsive: [
    {
      breakpoint: 992,
      settings: 'unslick'
    }
    ]
  });

  $('.promo_slider').on('afterChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('off');
    $('.animated').addClass('activate slideInRight');
  });   

  $('.promo_slider').on('beforeChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('activate slideInRight');
    $('.animated').addClass('off');
  });


  $('.product_slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product_slider-nav'
  });
  $('.product_slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product_slider-for',
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 650, 
        settings: {
          vertical: false
        }
      }
    ]
  });


// Slider UI Jquery
$( "#slider-range" ).slider({
  range: true,
  min: 1000,
  max: 1000000,
  values: [ 67000, 456000 ],
  slide: function( event, ui ) {
    $( "#amount" ).val( ui.values[ 0 ] + " \u20BD - " + ui.values[ 1 ] + " \u20BD" );
  }
});
$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
  " \u20BD - " + $( "#slider-range" ).slider( "values", 1 ) + " \u20BD");


// Formstyler
(function($) {
  $(function() {

    $('select').styler();

  });
})(jQuery);



});