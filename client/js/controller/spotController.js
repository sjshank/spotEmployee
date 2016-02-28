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

           appDirectives(spotApp);

            spotApp.controller('spotCtrl', ['$scope', '$rootScope', '$location', 'spotService',
                                 'responseService', '$mdDialog', 'tableFactory', 'loadService',
                                 function($scope, $rootScope, $location, spotService, responseService,
                                     $mdDialog, tableFactory, loadService){

                console.log('spot controller');
                $rootScope.showSearchBox = true;
                try{
                    loadService.load({}).$promise.then(function(response){
                        if(responseService.checkResponse(response, $scope, true)){
                          console.log(response.data);
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
                $scope.hoverIn = function(data){
                  try{
                          if(data.isVacant){
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

                $rootScope.$on('employeeSelected', function (event, args) {
                 $scope.message = args.empName;
                 console.log($scope.message);
                 });
            }]);

     
});