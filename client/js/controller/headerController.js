require(['app',
        'service/spotService',
        'utils/appUtils'],
        function(spotApp,
                 userService,
                 appUtils) {

            spotApp.controller('headerCtrl', ['$scope', '$http', '$rootScope', '$location', 'responseService',
                                 function($scope, $http, $rootScope, $location, responseService){
              

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

                  $scope.onSelect = function($item, $model, $label) {
                    $scope.query = $label;
                    console.log($item);
                    try{
                      $rootScope.$broadcast('employeeSelected', { seatObj: $item });
                    }catch(e){
                      console.log("Not able to select employee name");
                    }
                  };
            }]);
});