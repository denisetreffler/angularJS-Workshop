"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController",
    function($scope, LoginService, $timeout) {
        
        var vm = this;

        vm.loggedIn = true;
        vm.dataLoading = false;
        vm.loginData = LoginService.getUser();
        vm.logout = logout;
        vm.login = login;

        function logout() {
            vm.loggedIn = false;
            vm.dataLoading = false;
        };

        function login() {
            vm.dataLoading = true;
            $timeout(function(){
                vm.loggedIn = true;
            },1000);
        };
    }
);

loginModule.factory("LoginService",
    LoginService
);