define(['app',
        'service/spotService',
        'utils/appUtils'],
        function(spotApp,
                 spotService,
                 appUtils) {

            spotApp.controller('spotCtrl', ['$scope', '$rootScope', '$location', 'spotService', 'responseService',
                                 function($scope, $rootScope, $location, spotService, responseService){

                console.log('spot controller');

            }]);

});