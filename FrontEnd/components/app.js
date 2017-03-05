/**
 * Created by user on 04/03/17.
 */

/* Check if Cookie contains login information in current browser */
function ifLogin() {
    console.log('Cookies user name: ' + Cookies.get('user-name'));
    if (Cookies.get('user-name') !== undefined) {
        return true;
    }
    return false;
}

/* Initialize the main page */
$(document).ready(function() {
    if (ifLogin()){
        $("#main-page").load("components/main-page/main.html", function() {
            $('#main-page').show();
        });
    } else {
        $("#login-page").load("components/login-page/login.html", function() {
            $('#login-page').show();
        });
    }
});