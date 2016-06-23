"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController",
    function($scope, LoginService) {
        
        var vm = this;

        vm.loggedIn = true;
        vm.loginData = LoginService.getUser();
    }
);

loginModule.factory("LoginService",
    LoginService
);