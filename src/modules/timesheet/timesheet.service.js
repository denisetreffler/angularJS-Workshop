"use strict";

function TimesheetService($http) {

    return {
        getAll: getAll
    };

    function getAll() {
        return $http.get('./dummydata/timesheets.json');
    }
};