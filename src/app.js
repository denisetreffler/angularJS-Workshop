'use strict';

var workshopApp = angular.module('ec4uWorkshop', [
    "ui.router",
    "pascalprecht.translate",
    "modules.login",
    "modules.home",
    "ngMockE2E"
]);

workshopApp.controller('mainController',
        function($scope, $state, $translate){
            $scope.welcomeTitle = "Welcome";
            $scope.currentState = $state;
            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };
        });