/*! Preloader */
$(window).on('load', function () {
    $preloader = $('.holder'),
    $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(300).fadeOut('slow');
});