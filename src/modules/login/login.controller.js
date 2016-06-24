"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController",
    function($scope, LoginService) {
        
        var vm = this;

        vm.loggedIn = true;
        vm.loginData = LoginService.getUser();
        vm.logout = logout;
    }
);

loginModule.factory("LoginService",
    LoginService
);

function logout() {
    this.loggedIn = false;
};