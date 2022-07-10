$(document).ready(function(){
    $(".m-slides").owlCarousel({
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

const swiper = new Swiper('.second-pg-slider', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        autoplay:{
          delay: 2000,
          disableOnInteraction: true,
        },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swipe = new Swiper('.forth-pg-slider', {
  direction: 'horizontal',
  loop: true,
  effect: "fade",
  autoplay:{
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
