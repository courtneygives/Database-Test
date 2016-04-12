var app = angular.module('app', []);

app.controller('MainControl', ['$scope', '$http', function($scope, $http){
  $scope.assignment = {};
  $scope.assignments = [];
    // every 5 sec update or push to the array
    var getAssign = function(){
      return $http.get('/all').then(function(response){
        if(response.status !== 200){
          console.log('There is an error');
        }
        $scope.assignment = {};
        $scope.assignments = response.data;
        return response.data;
      });
    };

    $scope.newEntry = function(){
      console.log($scope.assignment);
       $http.post('/add', $scope.assignment).then(getAssign());
    };
    getAssign();
}]);
