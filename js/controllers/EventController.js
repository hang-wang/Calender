app.controller('EventController', ['$scope','events', '$routeParams', function($scope, events, $routeParams) {
    events.success(function(data) {
    //$scope.detail = data[$routeParams.id];
      $scope.detail = data.events[$routeParams.id];
  });
}]);