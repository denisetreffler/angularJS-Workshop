'use strict';

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
                        controller: 'loginController',
                        controllerAs: "ctrl"
                    })
                    .state('About', {
                        url: '/about',
                        templateUrl: 'partials/about/about.html'
                    });
        });