/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
/* Check if Cookie contains login information in current browser */
/* Return : true if Cookie contains login info ; otherwise false */
window.app.ifLogin = function() {
    console.log('[ifLogin] ' + Cookies.get('user-name'));
    if (Cookies.get('user-name') !== undefined && Cookies.get('user-password') !== undefined) {
        return true;
    }
    return false;
};

/* Initialize the page */
/* Return : true if initialization succeed, otherwise false */
window.app.initMainPage = function() {
    if (window.app.ifLogin()){
        $("#app-page #main-panel").load("components/hello/hello.html", function() {
            $('#app-page').show();
        });
        return true
    } else {
        $("#login-page").load("components/login/login.html", function() {
            $('#login-page').show();
        });
        return true;
    }
    return false;
};

/* Initialize the app page */
$(document).ready(function() {
    window.app.initMainPage();
});