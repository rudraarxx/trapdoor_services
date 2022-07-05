$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    items : 1, // THIS IS IMPORTANT
    loop:true,
    margin:10,
    animateOut: 'fadeOutDown',
    animateIn: 'flipInX',
    autoHeight:true,
    dots: false,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
    });

  });
  $(function() {
    AOS.init();
});
