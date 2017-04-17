/**
 * Created by Z YAN on 09/04/17.
 */
var postRegisterData = function(url, name, email, password) {
    return $.ajax({
        url : url,
        type : 'POST',
        dataType : 'json',
        crossDomain: true,
        jsonp : false,
        data : {
            name : name,
            email : email,
            password : password
        }
    });
};

var postLoginData = function(url, email, password) {
    return $.ajax({
        url : url,
        type : 'POST',
        dataType : 'json',
        crossDomain: true,
        jsonp : false,
        data : {
            email : email,
            password : password
        }
    });
};




