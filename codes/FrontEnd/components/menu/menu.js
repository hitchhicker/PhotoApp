/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
$(document).ready(function() {
    /* Attach click event to button 'switch-to-top-btn' */
    $('#switch-to-top-btn').click(function(){
        $("#app-page #main-panel").load(window.app.rootUrl + "components/topPhotos/topPhotos.html")
    });
    /* Attach click event to button 'switch-to-request-btn' */
    $('#switch-to-request-btn').click(function(){
        $("#app-page #main-panel").load(window.app.rootUrl + "components/requestPhoto/requestPhoto.html")
    });
    /* Attach click event to button 'switch-to-post-btn' */
    $('#switch-to-post-btn').click(function(){
        $("#app-page #main-panel").load(window.app.rootUrl + "components/postPhoto/postPhoto.html")
    });
    /* Attach click event to button 'switch-to-account-btn' */
    $('#switch-to-account-btn').click(function(){
        $("#app-page #main-panel").load(window.app.rootUrl + "components/userAccount/userAccount.html")
    });


});