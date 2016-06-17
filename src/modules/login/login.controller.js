"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController",
    function($scope) {
        $scope.user = {
            id: 1,
            name: 'George Clooney',
            pw: 'batman'
        };
    });