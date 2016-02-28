define(['app',
        'service/signinService',
        'utils/appUtils',
        'controller/headerController'],
        function(spotApp,
                 signinService,
                 appUtils,
                 headerController) {

            spotApp.controller('signinCtrl', ['$scope', '$rootScope', '$location', 'tableFactory',
                                 function($scope, $rootScope, $location, tableFactory){
              
               $rootScope.showSearchBox = false;
               tableFactory.clearTableObj();
               $scope.signin = function(){
                  $location.path('/spot');
               };

            }]);
});