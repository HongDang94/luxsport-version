jQuery(document).ready(function ($) {
    "use strict";
    var slides_count = document.getElementsByClassName("swiper-slide");
       var swiper = new Swiper(".slider-thumb", {
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        on: {
          slideChange: function(){
              var offer = document.querySelector('#numberSlides');
              offer.innerHTML = (this.activeIndex +  1) + '/' + slides_count.length + 'Offers';
          }
        }
      });
      var swiper2 = new Swiper(".detail-product-slider", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

  });
  