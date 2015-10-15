'use strict';

function RoutingError(message) {
    this.name = 'RoutingError';
    this.message = message;
}

function RestError(message) {
    this.name = 'RestError';
    this.message = message;
}

RoutingError.prototype.constructor = RoutingError;
RestError.prototype.constructor = RestError;

angular.module('swisscomWorkshop', [
])
    .controller('WelcomeController', ['$scope', function($scope){
        $scope.welcomeTitle = "Das war's schon";
        $scope.welcomeMessage = "Bis im Workshop, wir freuen uns!";
    }]);