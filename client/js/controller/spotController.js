define(['app',
        'service/spotService',
        'utils/appUtils'],
        function(spotApp,
                 spotService,
                 appUtils) {

            spotApp.controller('spotCtrl', ['$scope', '$rootScope', '$location', 'spotService', 'responseService',
                                 function($scope, $rootScope, $location, spotService, responseService){

                console.log('spot controller');
                $scope.officeModel = [];
                spotService.doSignin({
                  empID : $scope.employeeID  
                }).$promise.then(function(response){
                      if(responseService.checkResponse(response, $scope, true)){
                         $scope.hasError = false;
                         $scope.officeModel = response.data;
                  }
                  }, function(err){
                      responseService.checkResponse(err, $scope, false);
                  });
            }]);

});