"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController", 
    function($scope) {
        $scope.title = "Login";
    });