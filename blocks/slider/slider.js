$(document).on('ready', function() {
    $(".slider__content").slick({
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        prevArrow: $('.slider__button_prev'),
        nextArrow: $('.slider__button_next')
    });
    
  });