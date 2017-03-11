/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
$(document).ready(function(){
    /* Attach click event to button 'submit-login' */
    $('#submit-login').click(function(){
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        window.app.checkIfLoginValid(email, password, function(isValid){
            if (isValid) {
                window.app.initMainPage();
            } else {
                alert('User email or password not correct!');
            }
        });
    });
    /* Attach click event to button 'submit-register' */
    $('#submit-register').click(function(){
        alert('Sorry, not working now');
    });


});