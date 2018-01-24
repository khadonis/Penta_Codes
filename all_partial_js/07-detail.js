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
