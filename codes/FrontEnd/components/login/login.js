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
        window.api.postLoginData(window.api.rootUrl+'login', email, password).done(function(response) {
            console.log('[login] ' + response.status + ' ' + response.message);
            if (response.status == 1) {
                window.app.setLoginInCookies(response.name, email, password);
                window.app.initMainPage();
            } else if (response.status == 3) {
                console.log("[To be added]");
            }
        }).fail(function(response){
            console.log('[login] ' + response.status + ' ' + response.message);
        });
    });

    /* Attach click event to input 'submit-register' */
    $('#submit-register').click(function(){
        var name = $("#register-name").val();
        var email = $("#register-email").val();
        var password = $("#register-password").val();

        window.api.postRegisterData(window.api.rootUrl+'register', name, email, password).done(function(response) {
            console.log('[register] ' + response.status + ' ' + response.message);
            if (response.status == 1) {
                window.app.setLoginInCookies(name, email, password);
                window.app.initMainPage();
            } else if (response.status == 3) {
                console.log("[To be added]");
            }
        }).fail(function(response){
            console.log('[register] ' + response.status + ' ' + response.message);
        });

        // $.post( "http://localhost:81/register", { name: name, email: email, password: password }, function(data){
        //     console.log('[Register] ' + data);
        // } );
    });


});