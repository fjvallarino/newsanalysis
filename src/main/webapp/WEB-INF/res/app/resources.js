angular.module('rest.resources', ['ngRoute', 'ngResource'])

.factory('Article', ['$resource', function($resource) {
	return $resource('articles/:id');
}]);
