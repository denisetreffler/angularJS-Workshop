'use strict';

var workshopApp = angular.module('ec4uWorkshop', [
    "ui.router",
    //"modules.login",
    //"modules.home"
]);

workshopApp.config(
        function($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise('home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'partials/home/home.html'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'partials/login/login.html'
                    })
                    .state('about', {
                        url: '/about',
                        templateUrl: 'partials/about/about.html'
                    });
        });

workshopApp.controller('mainController',
        function($scope){
                $scope.welcomeTitle = "Welcome";
        });