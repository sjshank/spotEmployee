define(['angular',
        'angRoute',
        'angularAMD',
        'angResource',
        'angAnimate',
        'angAria',
        'angMaterial',
        'angMessages',
        'ngSanitize',
        'uiBootstrap'],
        function(angular,
                 angRoute,
                 angularAMD,
                 angResource,
                 angAnimate,
                 angAria,
                 angMaterial,
                 angMessages,
                 ngSanitize,
                 uiBootstrap) {

        var _self = this;
        'use strict';

        // Creating apllication module and defining dependencies
        var app = angular.module("spotApp", ["ngRoute", "ngResource", "ngMaterial", "ngMessages", "ui.bootstrap", "ngSanitize"], function($httpProvider){});
        
        // Defining routes
        app.config( function ($routeProvider) {
                         $routeProvider
                         .when("/signin", angularAMD.route({
                                 templateUrl: 'views/login.htm', controller: 'signinCtrl', controllerUrl: 'controller/signinController'
                         }))
                         .when("/spot", angularAMD.route({
                                 templateUrl: 'views/spot.htm', controller: 'spotCtrl', controllerUrl: 'controller/spotController'
                         }))
                         .otherwise({redirectTo: "/signin"});
                         });

        app.constant('appConstants', {
                        SERVICE_ERROR : "Service is temporarily unavailable. Please try after sometime.",
                        BLUE_INDICATOR : "#337ab7",
                        MAROON_INDICATOR : "#800000",
                        GREY_INDICATOR : "#808080",
                });
        app.run([ '$rootScope', function($rootScope) {
                $rootScope.showSearchBox = false;
        }]);

       
        //Bootstrapping application using AngularAMD
        return angularAMD.bootstrap(app);
});