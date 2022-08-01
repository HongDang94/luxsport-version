jQuery(document).ready(function ($) {
  "use strict";

  // var swiper = new Swiper(".slider-thumb", {
  //   spaceBetween: 8,
  //   slidesPerView: "auto",
  //   freeMode: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  //   slideToClickedSlide: true,
  // });

  // var swiper2 = new Swiper(".news-list", {
  //   spaceBetween: 10,
  //   effect: "fade",
  //   autoHeight: true,

  //   thumbs: {
  //     swiper: swiper,
  //   },
  // });

  // swiper2.on("slideChange", function () {
  //   var idx = tabContent.activeIndex;
  //   swiper.slideTo(idx, 500);
  // });

  // $(".slider-thumb .swiper-wrapper a").click(function () {
  //   $(this).addClass("selected");
  //   $(this).siblings().removeClass("selected");
  // });

  var tabTit = new Swiper(".slider-thumb", {
    spaceBetween: 8,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  });
  var tabContent = new Swiper(".news-list", {
    spaceBetween: 10,
    autoHeight: true,
    effect: "fade",
    thumbs: {
      swiper: tabTit,
    },
  });
  tabContent.on("slideChange", function () {
    var idx = tabContent.activeIndex;
    tabTit.slideTo(idx, 500);
  });
  $(".slider-thumb .swiper-wrapper a").click(function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });
});
