/**
 * Created by Zhengqin YAN on 03/03/17.
 */

$(document).ready(function() {
    console.log("Wait!");
    $('#text-after-login').text('Welcome ' + Cookies.get('user-name'));
});
