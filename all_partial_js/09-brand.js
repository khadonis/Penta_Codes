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
