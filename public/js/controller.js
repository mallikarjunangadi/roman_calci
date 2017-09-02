angular.module('RomanCalciController', [])

.controller('homeCtrl', function($scope, serviceAPI) {
   $scope.calculate = {sign:'+'}; 
   $scope.resultMsg = "";
   $scope.getResult = function(calculate) {
        var promise = serviceAPI.toServer(calculate, '/calculate');
        promise.then(function(res) {
            console.log(res.data.data); 
            $scope.resultMsg = res.data.data;
        }, function() {
            console.log('error');
            $scope.resultMsg = 'unable to calculate... try again'
        })
   }   
})