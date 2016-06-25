'use strict';

var fakeBackendModule = angular.module("fakeBackendModule", []);
fakeBackendModule.run(initFakeBackend);

function initFakeBackend($httpBackend) {
    var testUser = {
        username: "JonSnow",
        firstname: "Jon",
        lastname: "Snow",
        password: "password",
        id: "0"
    };

    // fake authenticate api end point
    $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
        // get parameters from post request
        var params = angular.fromJson(data);

        // check user credentials and return fake jwt token if valid
        if (params.username === testUser.username && params.password === testUser.password) {
            return [200, { 
                token: "fake-jwt-token",
                userData: testUser
            }, {}];
        } else {
            return [200, {}, {}];
        }
    });

    // pass through any urls not handled above so static files are served correctly
    $httpBackend.whenGET(/^\w+.*/).passThrough();
};