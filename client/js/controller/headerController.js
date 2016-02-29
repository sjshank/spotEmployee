require(['app',
        'service/spotService',
        'utils/appUtils'],
        function(spotApp,
                 userService,
                 appUtils) {

            spotApp.controller('headerCtrl', ['$scope', '$http', '$rootScope', '$location', 'responseService',
                                 function($scope, $http, $rootScope, $location, responseService){
              
              //Retrieve list of employee based on user search
              $scope.getEmployee = function(val){

                  return $http.post('/api/search', {
                          searchQuery : val
                        }).then(function(response){
                          if(response.data.length > 0){
                            return response.data.map(function(item){
                              return seat = item;
                            });
                          }
                      });
                  };

                  //On select of employee from auto-complete, broadcast event and paas current object
                  $scope.onSelect = function($item, $model, $label) {
                    $scope.query = $label;
                    try{
                      $rootScope.$broadcast('employeeSelected', { seatObj: $item });
                    }catch(e){
                      console.log("Not able to select employee name");
                    }
                  };
            }]);
});