"use strict";

function TimesheetService() {

    return {
        day: undefined,
        hours: undefined,
        project: undefined,
        comment: undefined,
        isRemote: false,
        getAll: getAll
    };

    function getAll() {
        return true;
    }

};