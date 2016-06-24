"use strict";

function LoginService() {

    return {
        getUser: getUser
    };

    function getUser() {
        return {
            username: "JonSnow",
            firstname: "Jon",
            lastname: "Snow",
            password: "password",
            id: "0"
        }
    }

};