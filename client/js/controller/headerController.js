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
                          return response.data.map(function(item){
                            return item.emp.name;
                          });
                      });
                  };

                  $scope.onSelect = function($item, $model, $label) {
                    try{
                      $rootScope.$broadcast('employeeSelected', { empName: $model });
                    }catch(e){
                      console.log("Not able to select employee name");
                    }
                  };
            }]);
});