"use strict";

function LoginService($http) {
    
    return {
        getLoggedInState: getLoggedInState,
        getUser: getUser,
        login: login,
        logout: logout
    };

    function getLoggedInState() {
        return !(localStorage.getItem("currentUser") === null);
    }

    function getUser() {
        if(getLoggedInState()) {
            return JSON.parse(localStorage.getItem("currentUser"));
        }
        return undefined;
    };

    function login(username, password) {
        return $http.post("/api/authenticate", {
                username: username,
                password: password
            });
    };

    function logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentToken");
    };

};