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
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      // var swiper = new Swiper(".btn-scroll-swiper", {
      //   spaceBetween: 16,
      //   hashNavigation: {
      //     watchState: true,
      //   },
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      //       renderBullet: function (index, className) {
      //         return '<span class="' + className + '">' + (menu[index]) + '</span>';
      //       },
      //   },
      // });
      var swiperVideoDetail = new Swiper(".video-slider-detail", {
        slidesPerView: "auto",
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination.pagination-video-detail",
          clickable: true,
        },
    
      });
      
  });
  

