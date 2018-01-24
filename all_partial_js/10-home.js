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
