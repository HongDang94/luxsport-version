jQuery(document).ready(function ($) {
  "use strict";
  var swiperBanner = new Swiper(".bannerSlider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperAdvertisSlider = new Swiper(".advertisSlider", {
    slidesPerView: "auto",
    spaceBetween: 24,
  });

  var swiperBlogSlider = new Swiper(".blogSlider", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperProductSlider = new Swiper(".productSlider", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
