/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
/*  Initialize the page by checking the cookies and then loading the corresponding component
 Return : true if initialization succeed, otherwise false
 */
var initMainPage = function() {
    if (ifLoginInCookies()){
        window.api.postLoginData(window.api.rootUrl+'login', Cookies.get('user-email'), Cookies.get('user-password')).done(function(response) {
            console.log('[login] ' + response.status + ' ' + response.message);
            if (response.status == 1) {
                $("#app-page #main-panel").load(rootUrl + "components/postPhoto/postPhoto.html", function() {
                    switchMainPage('app-page');
                    $("#app-page #menu-panel").load(rootUrl + "components/menu/menu.html");
                });
                return true;
            } else if (response.status == 3) {
                console.log("[To be added]");
                $("#login-page").load(rootUrl + "components/login/login.html", function() {
                    switchMainPage('login-page');
                });
                return true;
            }
        }).fail(function(response){
            $("#login-page").load(rootUrl + "components/login/login.html", function() {
                switchMainPage('login-page');
            });
            return true;
        });
    } else {
        $("#login-page").load(rootUrl + "components/login/login.html", function() {
            switchMainPage('login-page');
        });
        return true;
    }
    return false;
};

$(document).ready(function() {
    window.app.initMainPage = initMainPage;
    window.app.initMainPage();
});