define(['app',
        'service/signinService',
        'utils/appUtils'],
        function(spotApp,
                 userService,
                 appUtils) {

            spotApp.controller('signinCtrl', ['$scope', '$rootScope', '$location', 'responseService',
                                 function($scope, $rootScope, $location, responseService){
              
               console.log('signin controller');
               $scope.hasError = false;

               $scope.signin = function(){
                $location.path('/spot');
               };

            }]);
});