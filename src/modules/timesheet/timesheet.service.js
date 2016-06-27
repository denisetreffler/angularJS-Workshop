"use strict";

function TimesheetService($http) {

    return {
        getAll: getAll,
        getUsers: getUsers,
        getProjects: getProjects
    };

    function getAll() {
        return $http.get('./dummydata/timesheets.json');
    }

    function getUsers() {
        return $http.get('./dummydata/users.json');
    }

    function getProjects() {
        return $http.get('./dummydata/projects.json');
    }
};