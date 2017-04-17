/**
 * Created by Z YAN on 03/03/17.
 */
'use strict';
$(document).ready(function() {
    /* Define window.app as global controller*/
    window.app = {};
    /* Add the global & general functions from functions.js */
    window.app.rootUrl = rootUrl;
    window.app.ifLoginInCookies = ifLoginInCookies;
    window.app.setLoginInCookies = setLoginInCookies;
    window.app.requestPhotoUrl = requestPhotoUrl;
    window.app.initMainPage = initMainPage;
    window.app.switchMainPage = switchMainPage;

    /* Define window.app as global controller*/
    window.api = {};
    /* Add the global & general functions from functions.js */
    window.api.rootUrl = 'http://localhost:80/';
    window.api.postRegisterData = postRegisterData;
    window.api.postLoginData = postLoginData;


    $('#main-page').load(window.app.rootUrl + 'components/main.html');

});