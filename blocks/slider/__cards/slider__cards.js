$(document).on('ready', function() {
    $(".slider__cards").slick({
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        prevArrow: $('#cards__button_prev'),
        nextArrow: $('#cards__button_next'),
        responsive: [
            {
                breakpoint: 800,
                settings: { 
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
        ]
    });
    
  });