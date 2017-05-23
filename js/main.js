(function($) {
    $('.nav-links').click(function (e) {
        var divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 20
        }, 'slow');
    });

    $('#beta-access-form').on('submit', function(e) {
        e.preventDefault();
        var sendData = {};
        var formData = $(this).serializeArray();
        for(var x=0;x<formData.length;x++) {
            sendData[formData[x]["name"]] = formData[x]["value"];
        }
        console.log(sendData);

        $.post('https://app.tagdeploy.com/contact', sendData, function(res) {
            console.log(res);
            var successMessage = $('<p/>', {
                text: 'Thank you!  We will contact you shortly.'
            });
            successMessage.addClass('alert alert-success');

            $('#beta-access-form-container').empty().append(successMessage);
        });
    });
})(jQuery);