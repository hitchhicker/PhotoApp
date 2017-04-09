/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
$(document).ready(function() {
    $('#user-account-title').text(Cookies.get('user-name') + '\'s account');
    /* Attach click event btn */
    $('#logout-btn').click(function(){
        $("#login-page").load(rootUrl + "components/login/login.html", function() {
            switchMainPage('login-page');
            //Remove the user login information from cookies
            Cookies.remove('user-name');
            Cookies.remove('user-email');
            Cookies.remove('user-password');
        });
    });
});
