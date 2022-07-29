jQuery(document).ready(function ($) {
    "use strict";
    function updSwiperNumericPagination() {
        this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + "</span>";
      }
      
      $(".detail-product-slider").each(function() {
        // Getting slides quantity before slider clones them
        this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;
      
        // Swiper initialization
        new Swiper(this, {
          speed: 800,
          loop: false,
          pagination: {
            el: this.querySelector(".swiper-pagination")
          },
          on: {
            init: updSwiperNumericPagination,
            slideChange: updSwiperNumericPagination
          }
        });
      });

       var swiper = new Swiper(".slider-thumb", {
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
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
  