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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  var swiperCategorySliderChair = new Swiper("#category-chair", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next.next-category-chair",
      prevEl: ".swiper-button-prev.prev-category-chair",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiperCategorySlider = new Swiper("#category-sport", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next.next-category-sport",
      prevEl: ".swiper-button-prev.prev-category-sport",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiperVideo = new Swiper(".video-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination.pagination-video",
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

  var openMenu = function () {
    $(".btn_menu").on("click", function () {
      $(".gnb").show();
      $("body").addClass("show_menu");
      $(".gnb")
        .stop()
        .animate({ left: "0" }, 600, "easeInOutExpo", function () {});
    });
  };

  var closeMenu = function () {
    $(".btn_close").on("click", function () {
      $("body").removeClass("show_menu");
      $(".gnb")
        .stop()
        .animate({ left: "-100%" }, 600, "easeInOutExpo", function () {
          //scrollLock(false);
          $(".gnb").hide();
        });
    });
  };

  openMenu();
  closeMenu();
});
