angular.module('example').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'example/views/example.client.view.html',
      controller : 'ExampleController'
    })
    .otherwise({
      redirectTo: '/'
    })
});