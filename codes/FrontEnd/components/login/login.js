/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
$(document).ready(function(){
    /* Attach click event to input 'submit-login' */
/*    $('#submit-login').on("submit", function (e) {
        console.log(e);
        e.preventDefault();
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        window.app.checkIfLoginValid(email, password, function(isValid){
            if (isValid) {
                window.app.initMainPage();
            } else {
                console.log('[Log in] User email or password not correct!');
            }
        });
    });*/
    $('#submit-login').click(function(e){
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        window.app.checkIfLoginValid(email, password, function(isValid){
            if (isValid) {
                window.app.initMainPage();
            } else {
                console.log('[Log in] User email or password not correct!');
            }
        });
    });
    /* Attach click event to input 'submit-register' */
    $('#submit-register').click(function(){
        alert('[Register] Sorry, not working now');
    });


});