$(document).on('ready', function() {
    $(".slider__cards").slick({
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        slidesToShow: 3,
        prevArrow: $('#cards__button_prev'),
        nextArrow: $('#cards__button_next')
    });
    
  });