(function() {
  $(".carousel").slick({
    slidesToShow: '4',
    speed: 500,
    arrows: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    }]
  })
})();
