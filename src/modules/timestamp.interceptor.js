"use strict"

function TimestampInterceptor() {
    var timestampMarker = {
        request: function(config) {
            config.requestTimestamp = new Date().getTime();
            console.log(new Date().getTime()/1000);
            return config;
        },
        response: function(response) {
            response.config.responseTimestamp = new Date().getTime();
            console.log(new Date().getTime()/1000);
            return response;
        }
    };
    return timestampMarker;
};

workshopApp.factory("TimestampInterceptor", [
    TimestampInterceptor
]);

workshopApp.config(
    function($httpProvider) {
        $httpProvider.interceptors.push('TimestampInterceptor');
    });