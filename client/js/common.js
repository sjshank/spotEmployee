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
		angMaterial : "angular-material/angular-material.min",
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
        "angMaterial" : {
        	deps: ["angular"],
            exports : "angMaterial"
        },
		"angRoute" :  ["angular"],
		"angularAMD" : ["angular"]
		},
	deps: ["app"]
	
});
