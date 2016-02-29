define(['angular'],
	function(angular){

  	return function(spotApp){
  		var _self = this;
		'use strict';

		//Directive to render tables
		 spotApp.directive("ngtableDiv", function() {
		 	
			    return  {
			    	templateUrl : '../views/table-directive.htm',
			    	scope : {
			    		tables : "=",
			    		onMouseover : "&"
			    	},
			        link : function(scope, element, attrs, controller) {
			        	
			        }
			    };
		});
  	};
});