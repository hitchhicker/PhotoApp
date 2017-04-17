/**
 * Created by Z YAN on 11/03/17.
 */
'use strict';
/*
*
* */
var rootUrl = '/FrontEnd/';

/*  Check if Cookie contains login information in current browser
    Return : true if Cookie contains login info ; otherwise false
*/
var ifLoginInCookies = function() {
    console.log('[ifLoginInCookies()] User name from cookies: ' + Cookies.get('user-name'));
    if (Cookies.get('user-name') !== undefined && Cookies.get('user-email') && Cookies.get('user-password') !== undefined) {
        return true;
    }
    return false;
};

var setLoginInCookies = function(name, email, password) {
    Cookies.set('user-name', name, { expires: 7 });
    Cookies.set('user-email', email, { expires: 7 });
    Cookies.set('user-password', password, { expires: 7 });
}

/*  Using HTTP GET req to return a photo url from Server

*/
var requestPhotoUrl = function(callback) {
    var photo_url = rootUrl + "/assets/fakeDB/photos/fakePhoto.jpg";
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