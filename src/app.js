'use strict';

var workshopApp = angular.module('ec4uWorkshop', [
    "ui.router",
    "modules.login",
    "modules.home"
]);

workshopApp.controller('mainController',
        function($scope, $state){
            $scope.welcomeTitle = "Welcome";
            $scope.currentState = $state;
        });