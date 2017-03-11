/**
 * Created by Z YAN on 03/03/17.
 */
'use strict';
$(document).ready(function() {
    /* Define window.app as global controller*/
    window.app = {};

    /* Add the necessary functions from functions.js */
    window.app.ifLogin = ifLogin;
    window.app.checkIfLoginValid = checkIfLoginValid;
    window.app.initMainPage = initMainPage;
    window.app.switchMainPage = switchMainPage;


    $('#background #main-page').load('components/main.html');

});