$(document).ready(function(){
  $('.to-top a').hide();
  $('.welcome').hide();
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if(scroll > 0) {
      $('.welcome').fadeIn(1000);
    }
    if(scroll > 500) {
      $('.to-top a').fadeIn(500);
    } else {
      $('.to-top a').fadeOut(500);
    };
  });
  $('.fade-in').on('inview', function(event, isInView) {
    if(isInView) {
      $(this).addClass("show");
    }
  });
  $('a[href^="."]').click(function() {
    let href = $(this).attr("href");
    let target = $(href == "." || href =="" ? 'html': href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 600, "swing")
    return false;
  });
  $('.to-top').on('click', function() {
    $('html, body').animate({scrollTop: '0'}, 600);
    return false;
  });
  $('.humberger').on('click', function() {
    humberger();
  });
  function humberger() {
    $('.humberger').toggleClass('open');
    if($('.humberger').hasClass('open')) {
      $('nav').addClass('open');
    } else {
      $('nav').removeClass('open');
    }
  }
});