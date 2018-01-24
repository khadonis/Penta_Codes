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
