/**
 * Created by user on 03/03/17.
 */
$(document).ready(function(){
    /* Attach click event to button 'submit-login' */
    $('#submit-login').click(function(){
        var email = $("#login-form :input")[0];
        var password = $("#login-form :input")[1];
        $.get("assets/fakeDB.json", function(data){
            for (var i=0; i<data.length; i++) {
                if (data[i].email == email && data[i].password == password) {
                    Cookies.set('user-name', data[i].name, { expires: 7 });
                    Cookies.set('user-email', data[i].email, { expires: 7 });
                    Cookies.set('user-password', data[i].password, { expires: 7 });
                    break;
                }
            }
        });
    });
    /* Attach click event to button 'submit-register' */
    $('#submit-register').click(function(){
        alert('Sorry, not working now');
    });
});