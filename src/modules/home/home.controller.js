"use strict";

var homeModule = angular.module("modules.home", ["ec4uWorkshop"]);

homeModule.controller("homeController", function($scope) {
        $scope.title = "Home";
    });