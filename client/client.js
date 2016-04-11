var app = angular.module('app', []);

app.controller('MainControl', ['$scope', '$http', function($scope, $http){
  $scope.assignment = {};
  $scope.assignments = [];
    // every 5 sec update or push to the array

    $scope.newEntry = function(argument){

    };

}]);
