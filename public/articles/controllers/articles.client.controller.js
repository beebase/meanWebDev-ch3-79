angular.module('articles').controller('ArticlesController',
  function($scope, $routeParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;
  });