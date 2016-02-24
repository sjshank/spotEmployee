define(['angular',
        'angRoute',
        'angularAMD',
        'angResource',
        'angCookies'],
        function(angular,
                 angRoute,
                 angularAMD,
                 angResource,
                 angCookies) {

        var _self = this;
        'use strict';

        // Creating apllication module and defining dependencies
        var app = angular.module("spotApp", ["ngRoute", "ngResource", "ngCookies"], function($httpProvider){});
        
        // Defining routes
        app.config( function ($routeProvider) {
                         $routeProvider
                         .when("/login", angularAMD.route({
                                 templateUrl: 'views/login.htm', controller: 'loginCtrl', controllerUrl: 'controller/loginController'
                         }))
                         .when("/spot", angularAMD.route({
                                 templateUrl: 'views/spot.htm', controller: 'spotCtrl', controllerUrl: 'controller/spotController'
                         }))
                         .otherwise({redirectTo: "/login"});
                         });

        app.constant('appConstants', {
                        SERVICE_ERROR : "Service is temporarily unavailable. Please try after sometime."
                });

        //Bootstrapping application using AngularAMD
        return angularAMD.bootstrap(app);
});