(function($) {
    $('.nav-links').click(function (e) {
        var divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 20
        }, 'slow');
    });
})(jQuery);