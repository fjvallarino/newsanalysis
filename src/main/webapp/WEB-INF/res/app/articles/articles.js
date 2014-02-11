var articlesModule = angular.module('articles', ['ngRoute', 'ngGrid', 'rest.resources']);

articlesModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/articles', {
		templateUrl: 'app/articles/list.tpl.html',
		controller: 'ArticlesListCtrl',
		resolve: { 
			articleList: function($route, Article) {
				return Article.query();
			}
		}
	});
}]);

articlesModule.controller('ArticlesListCtrl', ['$scope', 'articleList', function ($scope, articleList) {
	$scope.articles = articleList;
	
	$scope.articlesGridOptions = { 
		data: 'articles',
		columnDefs: [{ field: 'headline', displayName: 'Headline' }]
	};
}]);
