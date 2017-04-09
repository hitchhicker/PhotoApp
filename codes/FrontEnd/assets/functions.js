/**
 * Created by Z YAN on 11/03/17.
 */
'use strict';
/*
*
* */
var getRootUrl = function() {
    return '/FrontEnd/';
};

/*  Check if Cookie contains login information in current browser
    Return : true if Cookie contains login info ; otherwise false
*/
var ifLogin = function() {
    console.log('[ifLogin] User name from cookies: ' + Cookies.get('user-name'));
    if (Cookies.get('user-name') !== undefined && Cookies.get('user-password') !== undefined) {
        return true;
    }
    return false;
};

/*  Using HTTP GET req to check if the login information that user inputs is correct
    Params "email" : input user email
    Params "password" : input user password
    Params "callback" : function to be called when we know if the login information is valid or not
    Return : true if check process succeed, otherwise false
*/
var checkIfLoginValid = function(email, password, callback) {
    $.getJSON(getRootUrl() + "/assets/fakeDB/users.json", function(data, status){
        for (var i=0; i<data.users.length; i++) {
            if (data.users[i].email == email && data.users[i].password == password) {
                //Add the user login information into cookies
                Cookies.set('user-name', data.users[i].name, { expires: 7 });
                Cookies.set('user-email', data.users[i].email, { expires: 7 });
                Cookies.set('user-password', data.users[i].password, { expires: 7 });
                console.log('[ifLoginValid] Login information added into Cookies');
                callback(true);
                return true;
            }
        }
        callback(false);
        return false;
    });
};

/*  Using HTTP GET req to return a photo url from Server

*/
var requestPhotoUrl = function(callback) {
    var photo_url = getRootUrl() + "/assets/fakeDB/photos/fakePhoto.jpg";
    callback(photo_url);

};

/*  Switch between app-page and login-page
    Params "flag" : a string indicates the page which we will switch to
    Return : true if toggling succeed, otherwise false
*/
var switchMainPage = function(flag) {
    if (flag === 'app-page') {
        $('#login-page').hide();
        $('#app-page').show();
        return true;
    } else if (flag === 'login-page') {
        $('#app-page').hide();
        $('#login-page').show();
        return true;
    }
    return false;
};

/*  Initialize the page by checking the cookies and then loading the corresponding component
    Return : true if initialization succeed, otherwise false
*/
var initMainPage = function() {
    if (ifLogin()){
        $("#app-page #main-panel").load(getRootUrl() + "components/postPhoto/postPhoto.html", function() {
            switchMainPage('app-page');
            $("#app-page #menu-panel").load(getRootUrl() + "components/menu/menu.html");
        });
        $('#logout-btn').click(function(){
            $("#login-page").load(getRootUrl() + "components/login/login.html", function() {
                switchMainPage('login-page');
                //Remove the user login information from cookies
                Cookies.remove('user-name');
                Cookies.remove('user-email');
                Cookies.remove('user-password');
            });
        });
        return true
    } else {
        $("#login-page").load(getRootUrl() + "components/login/login.html", function() {
            switchMainPage('login-page');
        });
        return true;
    }
    return false;
};