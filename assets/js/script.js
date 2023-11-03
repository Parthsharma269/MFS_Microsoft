$('.slider').slick({
    infinite: true,
    speed: 100,
    arrows: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                autoplay: true
            }
        }
    ]
});