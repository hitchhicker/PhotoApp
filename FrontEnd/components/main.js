/* Created by user on 04/03/17. */

/* Check if Cookie contains login information in current browser */
function ifLogin() {
    console.log('Cookies user name: ' + Cookies.get('user-name'));
    if (Cookies.get('user-name') !== undefined) {
        return true;
    }
    return false;
}

/* Initialize the app page */
$(document).ready(function() {
    if (ifLogin()){
        $("#app-page #main-panel").load("components/hello/hello.html", function() {
            $('#app-page').show();
        });
    } else {
        $("#login-page").load("components/login/login.html", function() {
            $('#login-page').show();
        });
    }
});