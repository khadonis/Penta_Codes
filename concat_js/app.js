/* slider.js */
(function() {
  const mq = window.matchMedia( "(min-width: 875px)" );
  if (mq.matches) {
    $(".flex-slide").each(function() {
  		$(this).hover(
  			function() {
  				$(this)
            .addClass("open")
            .find(".flex-middle")
            .css({
              top: "90%",
              transform: "translateY(-90%)",
            })
  					.find(".flex-title")
  					.css({
  						transform: "rotate(0deg)",
              'font-size': "38px"
  					});

  				$(this)
  					.find(".flex-about, .flex-button")
  					.css({
  						opacity: "1"
  					});
  			},
  			function() {
  				$(this)
            .removeClass("open")
            .find(".flex-middle")
            .css({
              top: "50%",
              transform: "translateY(-50%)"
            })
  					.find(".flex-title")
  					.css({
  						transform: "rotate(-90deg)",
              'font-size': "68px"
  					});

  				$(this)
  					.find(".flex-about, .flex-button")
  					.css({
  						opacity: "0"
  					});
  			}
  		);
  	});
  }

  $('#home-banner').on('click', (e) => {
    $('html, body').animate({
        scrollTop: $("#home-slider").offset().top
    }, 2000);
  });

  $('.expo-caret').on('click', (e) => {
    $('html, body').animate({
        scrollTop: $("#home-brand").offset().top
    }, 2000);
  });

})();

/* carousel.js */
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

/* search.js */
(function() {
  $('.selectpicker').selectpicker();
})();

/* detail.js */
(function() {
  /*
    * Required for tabs
  */
  $('.product-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  /*
    * Required for product slider
  */
  $(document).ready(function() {
    $("#product-slider").lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      thumbItem: 3.5,
      vertical: true,
      verticalHeight: 550,
      vThumbWidth: 160,
      thumbMargin: 0,
      responsive : [
        {
          breakpoint: 700,
          settings: {
              slideMove: 1,
              slideMargin: 3,
              gallery: false,
              verticalHeight: 350,
            }
        },
        ]
    });
  });

  // Selectbox
  $('.selectpicker').selectpicker();

  // Offer Modal
  $('.product-offer-button').click(function() {
    $('.modal').modal('hide');
    $('#product-offer-success').modal();
  });
})();

/* brand.js */
(function() {
  if($('#announcement-slider')) {
    $("#announcement-slider").lightSlider({
        keyPress: true,
        loop: true,
        item: 3,
        vertical: true,
        pager: false,
        controls: true
    });
  }

  if ($("#crew-slider")) {
    $("#crew-slider").lightSlider({
        keyPress: true,
        loop: true,
        item: 4,
        pager: true,
        controls: false
    });
  }

  if ($("#produce-slider")) {
    $("#produce-slider").lightSlider({
        keyPress: true,
        loop: true,
        item: 4,
        pager: true,
        controls: false,
        responsive : [
          {
            breakpoint:1200,
            settings: {
              item:3,
              slideMove:1,
              slideMargin:6
            }
          },
          {
            breakpoint:720,
            settings: {
              item:2,
              slideMove:1
            }
         }
       ]
    });
  }

  /*
    * Required for product slider
  */
  $(document).ready(function() {
    $("#gallery-slider").lightSlider({
      gallery:true,
      thumbItem: 4,
      vertical: true,
      vThumbWidth: 220,
      thumbMargin: 5,
      item:1,
      verticalHeight: 420,
      auto:true,
      loop:true
    });
  });
})();

/* home.js */
(function() {
  $('#search-button').click(function() {
    $('.search-input').addClass('opensearch');
    $(this).siblings('span').hide();
  });

  $('.login-box').click(function() {
    $(this).addClass('open');
  });

  $('.close').click(function() {
    const this_ = $('.login-box');
    if (this_.hasClass('open')) {
      this_.removeClass('open');
    }
  })
})();

/* message.js */
(function(){
  $('.scrollbar-inner').scrollbar();
})();
