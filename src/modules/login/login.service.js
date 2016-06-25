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

    function login(username, password, callback) {
        $http.post("/api/authenticate", {
                username: username,
                password: password
            })
            .success(function (response) {
                // login successful if there's a token in the response
                if (response.token) {
                    localStorage.setItem("currentUser", JSON.stringify(response.userData));
                    localStorage.setItem("currentToken", response.token);
                    // execute callback with true to indicate successful login
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
    };

    function logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentToken");
    };

};