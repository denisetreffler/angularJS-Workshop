"use strict";

function LoginService() {

    var model = {
        username: "gClooney",
        firstname: "George",
        lastname: "Clooney",
        password: "password",
        isLoggedIn: isLoggedInFunc()
    };

    return model;

    function isLoggedInFunc() {
        return true;
    }

};