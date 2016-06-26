"use strict";

var timesheetModule = angular.module("modules.timesheet", [
    "fakeBackendModule"
]);

timesheetModule.controller("timesheetController",
    function($scope, TimesheetService) {

        var vm = this;
        
    }
);

timesheetModule.factory("TimesheetService",
    TimesheetService
);