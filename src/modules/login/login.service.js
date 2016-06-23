"use strict";

function LoginService() {

    return {
        getUser: getUser
    };

    function getUser() {
        return {
            username: "gClooney",
            firstname: "George",
            lastname: "Clooney",
            password: "password",
            id: "0"
        }
    }

};