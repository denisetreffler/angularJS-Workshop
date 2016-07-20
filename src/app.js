'use strict';

var workshopApp = angular.module('ec4uWorkshop',
    ["ui.router"]);

workshopApp.config(
        function($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise('home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'partials/partial-home.html'
                    })
                    .state('about', {
                        url: '/about',
                        // to be done
                    });
        });

workshopApp.controller('mainController',
        function($scope){
                $scope.welcomeTitle = "Welcome";
        });