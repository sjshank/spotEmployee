define(['app'],
		function(spotApp){

			var _self = this;
			'use strict';

			// Defining login facory named as loginService returning login resource for storing authenticated data in db.
			spotApp.factory('loginService', ['$resource', function($resource){
				return $resource('/auth/login', {}, {
				 doLogin: {
				 			   method: 'POST'
				 		  }
				  });
			}]);
});