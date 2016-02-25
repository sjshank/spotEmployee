define(['angular',
        'angRoute',
        'angularAMD',
        'angResource',
        'angAnimate',
        'angAria',
        'angMaterial',
        'angMessages'],
        function(angular,
                 angRoute,
                 angularAMD,
                 angResource,
                 angAnimate,
                 angAria,
                 angMaterial,
                 angMessages) {

        var _self = this;
        'use strict';

        // Creating apllication module and defining dependencies
        var app = angular.module("spotApp", ["ngRoute", "ngResource", "ngMaterial", "ngMessages"], function($httpProvider){});
        
        // Defining routes
        app.config( function ($routeProvider) {
                         $routeProvider
                         .when("/login", angularAMD.route({
                                 templateUrl: 'views/login.htm', controller: 'signinCtrl', controllerUrl: 'controller/signinController'
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