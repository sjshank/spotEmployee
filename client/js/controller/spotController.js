define(['app',
        'service/spotService',
        'utils/appUtils',
        'directives/appDirectives',
        'controller/headerController'],
        function(spotApp,
                 spotService,
                 appUtils,
                 appDirectives,
                 headerController) {

          //Calling directive
           appDirectives(spotApp);

           //Spot controller for spot screen
            spotApp.controller('spotCtrl', ['$scope', '$rootScope', '$location', 'spotService',
                                 'responseService', '$mdDialog', 'tableFactory', 'loadService', 'appConstants',
                                 function($scope, $rootScope, $location, spotService, responseService,
                                     $mdDialog, tableFactory, loadService, appConstants){

                $rootScope.showSearchBox = true;
                //OnLoad call to REST API service to load dummy data
                try{
                    loadService.load({}).$promise.then(function(response){
                        if(responseService.checkResponse(response, $scope, true)){
                          
                          if(response.data){
                            $scope.hasError = false;
                            tableFactory.setTableObj(response.data);
                            $scope.tableList = tableFactory.getTableObj();
                          }else{
                            $scope.hasError = true;
                            $scope.errorMsg = "Service is temporarily down";
                          }
                        }
                        }, function(err){
                          responseService.checkResponse(err, $scope, false);
                        });
                  }catch(e){
                    console.log('Service is not available to fullfill request');
                  }

                //var socket = io();
                $scope.query = "";

                //Logic for displaying popup with employee details
                $scope.hoverIn = function(data){
                  try{
                          if(!data.isVacant){
                              $mdDialog.show(
                                $mdDialog.alert()
                                  .clickOutsideToClose(true)
                                  .title('Employee Details')
                                  .ariaLabel('Offscreen Demo')
                                  .htmlContent('<div><div class="row"><div class="col-sm-6"><img src="images/boy_profile_image.jpg"></div>' +
                                    '<div class="col-sm-6"><h5>'+ data.emp.name + '</h5>' + 
                                    '<h4><b>' + data.emp.designation + '</b></h4></div></div>' + 
                                    '<div class="row"><div class="col-sm-8"><h5>Team</h5>' + 
                                    '<h4><b>' + data.emp.team + '</b></h4></div></div>' +
                                    '<div class="row"><div class="col-sm-8"><h5>Current Project</h5>' + 
                                    '<h4><b>' + data.emp.project + '</b></h4></div></div></div>')
                                  .ok('Got It !')
                              );
                          }
                    }catch(e){
                      console.log('Unable to display employee popup');
                    }
                };

                //Capture broadcast event
                $rootScope.$on('employeeSelected', function (event, args) {
                    if(args.seatObj && args.seatObj['emp']){
                      $scope.tableList.forEach(function(val, index, t){
                          val['obj'].forEach(function(v, i, o){
                            if(!v['isVacant']){ 
                                if(v['emp']['seatColor'] === appConstants.BLUE_INDICATOR){
                                    v['emp']['seatColor'] = appConstants.MAROON_INDICATOR;
                                }
                                if(v['seatID'] === args.seatObj['seatID']){
                                    v['emp']['seatColor'] = appConstants.BLUE_INDICATOR;
                                }
                            }
                          });
                      });
                    }
                 });
            }]);

     
});