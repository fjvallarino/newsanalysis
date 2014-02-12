angular.module('rest.resources', ['ngRoute', 'ngResource'])

.factory('Article', ['$resource', function($resource) {
	return $resource('articles/:id', { id: '@id' });
}])

.factory('ArticleSearchCriteria', ['$resource', function($resource) {
	return $resource('articles-search-criteria/:id', { id: '@id' });
}]);
