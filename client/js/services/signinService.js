define(['app'],
		function(spotApp){

			var _self = this;
			'use strict';

			spotApp.service('siginService', ['$resource', function($resource){
				return $resource('/api/load', {}, {
				 load: {
				 			   method: 'POST'
				 		  }
				  });
			}]);

			
});