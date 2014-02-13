angular.module('rest.resources', ['ngRoute', 'ngResource'])

.factory('Article', ['$resource', function($resource) {
	return $resource('articles/:id', { id: '@id' });
}])

.factory('ArticleSearch', ['$resource', '$q', '$http', function($resource, $q, $http) {
	return $resource('articles/search', {}, { 
		search: { method: 'POST', isArray: true }
	});
}])

.factory('ArticleSearchCriteria', ['$resource', function($resource) {
	return $resource('articles-search-criteria/:id', { id: '@id' });
}]);
