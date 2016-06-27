"use strict";

var timesheetModule = angular.module("modules.timesheet", [
    "fakeBackendModule"
]);

timesheetModule.controller("timesheetController",
    function($scope, $timeout, TimesheetService) {

        var vm = this;

        initController();

        function initController(){
            getAllSheets();
            getUsers();
            getProjects();
        };

        function getAllSheets() {
            $timeout(function(){
                TimesheetService.getAll().then(function(response){
                        vm.timesheets = (response.data.timesheet);
                        vm.filterByName = setFilterCriteria();
                });
            },1000);
        };

        function setFilterCriteria(){
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if(currentUser != null) {
                return currentUser.username;
            }
            return "empty";
        };
        
        function getProjects() {
            $timeout(function(){
                TimesheetService.getProjects().then(function(response){
                    vm.projects = (response.data.project);
                });
            },4000);
        };
        
        function getUsers() {
            $timeout(function(){
                TimesheetService.getUsers().then(function(response){
                    vm.users = (response.data.user);
                });
            },2000);
        };
    }
);

timesheetModule.factory("TimesheetService",
    TimesheetService
);