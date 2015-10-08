(function($) {
    $('.nav-links').click(function (e) {
        var divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 20
        }, 'slow');
    });

    $('#beta-access-form').on('submit', function(e) {
        e.preventDefault();
        var formData = $(this).serializeArray();
        var postData = { email: formData[0]['value'] };

        $.post('http://app.tagdeploy.com/contact', postData, function(res) {
            console.log(res);
            var successMessage = $('<p/>', {
                text: 'Thank you!  We will contact you when there are open spots for the beta version.'
            });

            $('#beta-access-form-container').empty().append(successMessage);
        });
    });
})(jQuery);