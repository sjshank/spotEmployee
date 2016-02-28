/*
*   Requirejs based configuration. Defining modules and their dependencies.
*/
require.config({
	baseUrl : "/",
	paths : {
		angular : "angular/angular.min",
		angularAMD : "angular-amd/angularAMD.min",
		angRoute : "angular-route/angular-route.min",
		angResource : "js/lib/angular-resource",
		angCookies : "angular-cookies/angular-cookies.min",
		angAnimate : "angular-animate/angular-animate.min",
		angAria : "angular-aria/angular-aria.min",
		angMaterial : "angular-material/angular-material.min",
		angMessages : "angular-messages/angular-messages.min",
        uiBootstrap : "js/lib/ui-bootstrap-tpls",
        ngSanitize : "angular-sanitize/angular-sanitize.min",
		controller : "js/controller",
		service  : "js/services",
		app : "js/app",
		utils : "js/utils"
	},
	shim : {
        "angular": {
            exports: "angular"
        },
        "angResource": {
            deps: ["angular"],
            exports : "angResource"
        },
        "angCookies": {
            deps: ["angular"],
            exports : "angCookies"
        },
        "angAnimate" : {
        	deps: ["angular"],
            exports : "angAnimate"
        },
        "angAria" : {
        	deps: ["angular"],
            exports : "angAria"
        },
        "angMessages" : {
        	deps: ["angular"],
            exports : "angMessages"
        },
        "angMaterial" : {
        	deps: ["angular"],
            exports : "angMaterial"
        },
        "ngSanitize" : {
            deps: ["angular"],
            exports : "ngSanitize"
        },
        "uiBootstrap" : {
            deps: ["angular"],
            exports : "uiBootstrap" 
        },
		"angRoute" :  ["angular"],
		"angularAMD" : ["angular"]
		},
	deps: ["app"]
	
});
