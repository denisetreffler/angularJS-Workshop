"use strict";

var loginModule = angular.module("modules.login", [
    "fakeBackendModule"
]);

loginModule.controller("loginController",
    function($scope, $rootScope, LoginService, $timeout) {
        
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
            emitLoginState(false);
        };

        function login() {
            vm.dataLoading = true;
            $timeout(function(){
                LoginService.login(vm.user.username, vm.user.password)
                    .then(function successCallback(response){
                        localStorage.setItem("currentUser", JSON.stringify(response.data.userData));
                        localStorage.setItem("currentToken", response.data.token);
                        vm.loggedIn = true;
                        vm.error = undefined;
                        vm.loginData = LoginService.getUser();
                        
                        // inform about success
                        emitLoginState(true);
                        
                        // console output
                        var time = response.config.responseTimestamp - response.config.requestTimestamp;
                        console.log(time / 1000);
                    },function errorCallback(){
                        vm.error = "Username or password is incorrect";
                        vm.dataLoading = false;
                    });
            },1000);
        };

        function emitLoginState(loggedIn) {
            $rootScope.$broadcast("LOGIN_SERVICE_STATE_CHANGED", loggedIn);
        };
    }
);

loginModule.factory("LoginService",
    LoginService
);