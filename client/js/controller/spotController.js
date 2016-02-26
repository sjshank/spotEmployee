define(['app',
        'service/spotService',
        'utils/appUtils'],
        function(spotApp,
                 spotService,
                 appUtils) {

            spotApp.controller('spotCtrl', ['$scope', '$rootScope', '$location', 'spotService', 'responseService',
                                 function($scope, $rootScope, $location, spotService, responseService){

                console.log('spot controller');
                var socket = io();
                $scope.hoverIn = function(event){
                  console.log(event.target.parentElement.id);
                  console.log(event.target.parentElement.getAttribute('name'));

                  socket.on('mouseover', function(data){
                          socket.removeListener('accountDetails');
                          data.name = "About IGATE @ Lincoln";
                          portalutils.makePopupCall('#showPopup', data);
                        });
                        socket.emit('mouseover', function(){
                          console.log('here in client');
                        });
                }
/*                spotService.doSignin({
                  empID : $scope.employeeID  
                }).$promise.then(function(response){
                      if(responseService.checkResponse(response, $scope, true)){
                         $scope.hasError = false;
                         for (var i = 0; i < Things.length; i++) {
                           Things[i]
                         };
                  }
                  }, function(err){
                      responseService.checkResponse(err, $scope, false);
                  });*/
            }]);

});