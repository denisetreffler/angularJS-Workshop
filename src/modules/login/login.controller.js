"use strict";

var loginModule = angular.module("modules.login", [
    "fakeBackendModule"
]);

loginModule.controller("loginController",
    function($scope, LoginService, $timeout) {
        
        var vm = this;

        vm.loggedIn = initController();
        vm.dataLoading = false;
        vm.loginData = LoginService.getUser();
        vm.logout = logout;
        vm.login = login;

        initController();
        
        function initController() {
            if(LoginService.getLoggedInState()){
                vm.loggedIn = true;
            } else {
                vm.loggedIn = false;
            }
        };
        
        function logout() {
            vm.loggedIn = false;
            vm.dataLoading = false;
            LoginService.logout();
        };

        function login() {
            vm.dataLoading = true;
            $timeout(function(){
                LoginService.login(vm.user.username, vm.user.password, function(result) {
                    if (result === true) {
                        vm.loggedIn = true;
                        vm.error = undefined;
                        vm.loginData = LoginService.getUser();
                    } else {
                        vm.error = "Username or password is incorrect";
                        vm.dataLoading = false;
                    }
                });
            },1000);
        };
    }
);

loginModule.factory("LoginService",
    LoginService
);