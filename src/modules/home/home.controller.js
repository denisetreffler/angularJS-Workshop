"use strict";

var homeModule = angular.module("modules.home", []);

homeModule.controller("homeController", function($scope) {
        $scope.title = "Home";
    });