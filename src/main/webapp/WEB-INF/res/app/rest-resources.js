angular.module('rest.resources', ['ngRoute', 'ngResource'])

.factory('Article', ['$resource', function($resource) {
	return $resource('articles/:id', { id: '@id' });
}])

.factory('ArticleSearch', ['$http', function($http) {
	return {
		search: function(params) {
			$http.post('articles/search', params).
				success(function(data, status, headers, config) {
					return data;
				}).
				error(function(data, status, headers, config) {
					console.log(status);
				});
			}
	};
}])

.factory('ArticleSearchCriteria', ['$resource', function($resource) {
	return $resource('articles-search-criteria/:id', { id: '@id' });
}]);
