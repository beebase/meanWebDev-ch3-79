var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, [
  'ngResource',
  'ngRoute',
  'users',
  'example',
  'articles'
]);

mainApplicationModule.config(function($locationProvider) {
  $locationProvider.hashPrefix('!');
});

// hack fix for facebook bug
if (window.location.hash === '#_=_') {
  window.location.hash = '#!';
}

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});

