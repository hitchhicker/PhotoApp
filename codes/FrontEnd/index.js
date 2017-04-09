/**
 * Created by Z YAN on 03/03/17.
 */
'use strict';
$(document).ready(function() {
    /* Define window.app as global controller*/
    window.app = {};

    /* Add the global & general functions from functions.js */
    window.app.rootUrl = rootUrl;
    window.app.ifLogin = ifLogin;
    window.app.checkIfLoginValid = checkIfLoginValid;
    window.app.requestPhotoUrl = requestPhotoUrl;
    window.app.initMainPage = initMainPage;
    window.app.switchMainPage = switchMainPage;


    $('#main-page').load(window.app.rootUrl + 'components/main.html');

});