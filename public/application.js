var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, [
  'ngRoute',
  'example'
]);

mainApplicationModule.config(function($locationProvider) {
  $locationProvider.hashPrefix('!');
});

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});

