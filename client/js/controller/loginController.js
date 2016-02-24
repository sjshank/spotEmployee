define(['app',
        'service/loginService',
        'utils/appUtils'],
        function(spotApp,
                 userService,
                 appUtils) {

            spotApp.controller('loginCtrl', ['$scope', '$rootScope', '$location', 'loginService', 'responseService',
                                 function($scope, $rootScope, $location, loginService, responseService){
              
                console.log('login controller');
                $scope.user = {
                	userName : "",
                	password : ""
                };
               
               $scope.login = function(){
               	console.log('Do login');


               	$location.path('/spot');
               };

            }]);
});