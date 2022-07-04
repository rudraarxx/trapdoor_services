$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // items : 1, // THIS IS IMPORTANT
        autoPlay: 3000,
        responsive : {
              480 : { items : 1  }, // from zero to 480 screen width 4 items
              768 : { items : 1  }, // from 480 screen widthto 768 6 items
              1024 : { items : 1   // from 768 screen width to 1024 8 items
              }
          },
          items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
    });

  });

