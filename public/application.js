var mainApplicationModuleName = 'mean';
//noinspection JSUnusedGlobalSymbols
var mainApplicationModule = angular.module(mainApplicationModuleName, [
  'ngRoute',
  'example'
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});