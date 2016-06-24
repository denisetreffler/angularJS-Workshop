"use strict";

var loginModule = angular.module("modules.login", []);

loginModule.controller("loginController",
    function($scope, LoginService) {
        
        var vm = this;

        vm.loggedIn = true;
        vm.dataLoading = false;
        vm.loginData = LoginService.getUser();
        vm.logout = logout;
        vm.login = login;
    }
);

loginModule.factory("LoginService",
    LoginService
);

function logout() {
    this.loggedIn = false;
    this.dataLoading = false;
};

function login() {
    this.dataLoading = true;
    this.loggedIn = true;
};