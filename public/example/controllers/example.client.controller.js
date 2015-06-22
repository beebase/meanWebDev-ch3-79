angular.module('example')
  .controller('ExampleController', function($scope, Authentication) {
    $scope.authentication = Authentication;
  });