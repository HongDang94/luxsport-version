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

  var swiperBlogSlider = new Swiper(".blog-slider", {
    slidesPerView: "auto",
    spaceBetween: 18,
    navigation: {
      nextEl: ".swiper-button-next.btn-blog",
      prevEl: ".swiper-button-prev.btn-blog",
    },
  });

  var swiperProductSlider = new Swiper(".productSlider", {
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next.next-btn",
      prevEl: ".swiper-button-prev.prev-btn",
    },
  });

  var swiperCategorySliderChair = new Swiper("#category-chair", {   
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next.next-btn-style2",
      prevEl: ".swiper-button-prev.prev-btn-style2",
    },
  });

  var swiperCategorySlider = new Swiper("#category-sport", {   
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next.next-btn-style2.sport",
      prevEl: ".swiper-button-prev.prev-btn-style2.sport",
    },
  });

  var swiperVideo = new Swiper(".video-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperBlogNews = new Swiper(".blog-news-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
