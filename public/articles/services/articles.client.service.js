angular.module('articles')
  .factory('Articles',
  function($resource) {
    return $resource('api/articles/:articleId',
      {
        articleId: '@_id'
      }, {
        update: {
          method: 'PUT'
        }
      });
  });