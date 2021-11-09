(function ($) {

  /* init product slider */
  function productSlider() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    });
  }

  $(document).ready(function () {
    productSlider();
  });
})(jQuery);