/* Created by user on 03/03/17. */
$(document).ready(function(){
    /* Attach click event to button 'submit-login' */
    $('#submit-login').click(function(){
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        $.getJSON("assets/fakeDB.json", function(data, status){
            for (var i=0; i<data.users.length; i++) {
                if (data.users[i].email == email && data.users[i].password == password) {
                    Cookies.set('user-name', data.users[i].name, { expires: 7 });
                    Cookies.set('user-email', data.users[i].email, { expires: 7 });
                    Cookies.set('user-password', data.users[i].password, { expires: 7 });
                    $("#app-page #main-panel").load("components/hello/hello.html", function() {
                        $('#login-page').hide();
                        $('#app-page').show();
                    });
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