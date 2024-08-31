$(document).on('ready', function() {
    $(".slider__cards-discount").slick({
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        slidesToShow: 5,
        prevArrow: $('#cards-discount__button_prev'),
        nextArrow: $('#cards-discount__button_next')
    });
    
  });