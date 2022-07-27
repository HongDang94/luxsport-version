jQuery(document).ready(function ($) {
  "use strict";

  $(".banner-slider").slick({
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 300,
    fade: true,
  });

  $(".intro-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          variableWidth: true,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-slider").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#play").on("click", function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $("#player").show();
    $("#video-cover").hide();
    $("#play").hide();
  });
});
