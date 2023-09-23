// on ready function
jQuery(document).ready(function ($) {
  // header fix for Position fixed
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 150) {
      $("header").addClass("header-fixed animated fadeInDown");
    } else {
      $("header").removeClass("header-fixed animated fadeInDown");
    }
  });
});

// wow js
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
});
wow.init();

// slick slider
$("#techSlider").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  arrows: false,
  dots: false,
  variableWidth: false,
  pauseOnHover: true,
  cssEase: "linear",
});

// current year
const yearEl = document.getElementById("currentYear");
yearEl.innerText = new Date().getFullYear();
console.log(new Date().getFullYear());
