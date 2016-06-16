'use strict';

var workshopApp = angular.module('ec4uWorkshop', [
    "ui.router",
    "modules.login",
    "modules.home"
]);

workshopApp.config(
        function($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise('home');

                $stateProvider
                    .state('Home', {
                        url: '/home',
                        templateUrl: 'partials/home/home.html',
                        controller: 'homeController'
                    })
                    .state('Login', {
                        url: '/login',
                        templateUrl: 'partials/login/login.html',
                        controller: 'loginController'
                    })
                    .state('About', {
                        url: '/about',
                        templateUrl: 'partials/about/about.html'
                    });
        });

workshopApp.controller('mainController',
        function($scope, $state){
            $scope.welcomeTitle = "Welcome";
            $scope.currentState = $state;
        });