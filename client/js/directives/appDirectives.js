define(['angular'],
	function(angular){

  	return function(spotApp){
  		var _self = this;
		'use strict';

		 spotApp.directive("ngtableDiv", function() {
		 	
			    return  {
			    	templateUrl : './js/directives/table-directive.htm',
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