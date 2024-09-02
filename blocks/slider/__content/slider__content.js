$(document).on('ready', function() {
    $(".slider__content").slick({
        variableWidth: true,
        adaptiveHeight: true,
        touchThreshold: 100,
        prevArrow: $('#gallery__button_prev'),
        nextArrow: $('#gallery__button_next'),
        responsive: [
            {
                breakpoint: 600,
                settings: { 
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
        ]
    });
    
  });