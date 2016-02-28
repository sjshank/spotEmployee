define(['app'],
		function(spotApp){

			var _self = this;
			'use strict';

			spotApp.service('spotService', ['$resource', function($resource){
				return $resource('/api/search', {}, {
				 search: {
				 			   method: 'POST'
				 		  }
				  });
			}]);

			spotApp.service('loadService', ['$resource', function($resource){
				return $resource('/api/load', {}, {
				 load: {
				 			   method: 'POST'
				 		  }
				  });
			}]);

			spotApp.factory('tableFactory', function(){
				var tableFactory = [];
					tableFactory.setTableObj = function(list){
						try{
							var k = 0;
							for (var i = 0; i < 6; i++) {
									var obj = [];
									for (var j = 0; j < 4; j++) {
											obj.push({
												'seatID' : list[k]['seatID'],
							                    'emp' : {
							                        'empID' : list[k]['emp']['empID'],
							                        'name' : list[k]['emp']['name'],
							                        'designation' : list[k]['emp']['designation'],
							                        'team' : list[k]['emp']['team'],
							                        'project' : list[k]['emp']['project'],
							                    },
							                    'isVacant' : list[k]['isVacant']
											});	
										k = k + 1;									
									}
								tableFactory.push({
									obj : obj
								});
							}
						}catch(e){
							console.log('error while populating table object in table factor');
						}
					};
					tableFactory.clearTableObj = function(){
						tableFactory = [];
					};
					tableFactory.getTableObj = function(){
						return tableFactory;
					};

					return tableFactory;
				});
			
});