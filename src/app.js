'use strict';

var workshopApp = angular.module('ec4uWorkshop', [
    "ui.router",
    "pascalprecht.translate",
    "modules.login",
    "modules.home",
    "modules.timesheet",
    "ngMockE2E"
]);

workshopApp.controller('mainController',
        function($scope, $state, $translate){
            $scope.welcomeTitle = "Welcome";
            $scope.currentState = $state;
            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };
            $scope.$on("LOGIN_SERVICE_STATE_CHANGED",
                function(event, data){
                    if (data){
                        var loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
                        $scope.loggedInMessage = loggedInUser.firstname.concat(" ").concat(loggedInUser.lastname).concat(": Winter is coming...");
                    } else {
                        $scope.loggedInMessage = undefined;
                    }
                });
        });