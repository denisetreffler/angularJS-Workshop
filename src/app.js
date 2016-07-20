'use strict';

angular.module('ec4uWorkshop', [
])
    
    
    .controller('WelcomeController', 
        ['$scope', function($scope){
        $scope.welcomeTitle = "Das war's schon";
        $scope.welcomeMessage = "Bis im Workshop, wir freuen uns!";
        }])
    .controller('clickController', function($scope){
        $scope.value = 0;
        $scope.counter = function(){
            $scope.value += 1;
        }});