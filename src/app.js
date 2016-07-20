'use strict';

angular.module('ec4uWorkshop', [
])
    
    
    .controller('WelcomeController', 
        ['$scope', function($scope){
        $scope.welcomeTitle = "Das war's schon";
        $scope.welcomeMessage = "Bis im Workshop, wir freuen uns!";
        }])
    .controller('aController',
        ['$scope', function($scopesssss){
            $scopesssss.name1 = "aController value1";
            $scopesssss.name2 = "aController value2";
        }])
    .controller('bController', function ($scope) {
        $scope.obj = {
            name1: "bController value1",
            name2: "bController value2"
        }})
    .controller('cController', function () {
        this.obj = {
            name1: "cController value1",
            name2: "cController value2"
        }})
    .controller('dController', function ($scope) {
        $scope.obj = {
            name1: "dController value1",
            name2: "dController value2"
        }});