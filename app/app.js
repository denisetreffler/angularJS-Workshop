'use strict';

angular.module('swisscomWorkshop', [
])
    .controller('WelcomeController', ['$scope', function($scope){
        $scope.welcomeTitle = "Das war's schon";
        $scope.welcomeMessage = "Bis im Workshop, wir freuen uns!";
    }]);