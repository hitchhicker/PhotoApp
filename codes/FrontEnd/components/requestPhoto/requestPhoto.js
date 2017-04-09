/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
$(document).ready(function() {
    /* Attach click event to button 'request-photo-btn' */
    $('#request-photo-btn').click(function(){
        window.app.requestPhotoUrl(function(photo_url) {
            $('#request-photo-btn').prop('disabled', true);
            $('#request-photo-image-container img').on('load', function() {
                $('#request-photo-btn').prop('disabled', false);
            });
            $('#request-photo-image-container img').attr("src", photo_url);

        });
    });
});
