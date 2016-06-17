"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController",
    function($scope, LoginService) {
        $scope.vm = LoginService;
    }
);

loginModule.factory("LoginService",
    LoginService
);