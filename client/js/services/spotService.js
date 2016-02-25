define(['app'],
		function(spotApp){

			var _self = this;
			'use strict';

			spotApp.factory('spotService', ['$resource', function($resource){
				return $resource('/api/load', {}, {
				 doSignin: {
				 			   method: 'POST'
				 		  }
				  });
			}]);
});