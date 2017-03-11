/**
 * Created by Z YAN on 09/03/17.
 */
'use strict';
$(document).ready(function() {
    $('#user-account-title').text(Cookies.get('user-name') + '\'s account');
});
