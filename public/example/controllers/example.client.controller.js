angular.module('example')
  .controller('ExampleController', function($scope, Authentication) {
    $scope.name = Authentication.user ?
      Authentication.user.fullName : 'MEAN Application';
  });