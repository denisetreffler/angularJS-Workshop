"use strict";

var timesheetModule = angular.module("modules.timesheet", [
    "fakeBackendModule"
]);

timesheetModule.controller("timesheetController",
    function($scope, TimesheetService) {

        var vm = this;

        initController();

        function initController(){
            getAllSheets();
        };

        function getAllSheets() {
            TimesheetService.getAll().then(function(response){
                    vm.timesheets = (response.data.timesheet);
                    vm.filterByName = setFilterCriteria();
            });
        };

        function setFilterCriteria(){
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if(currentUser != null) {
                return currentUser.username;
            }
            return "empty";
        }
    }
);

timesheetModule.factory("TimesheetService",
    TimesheetService
);