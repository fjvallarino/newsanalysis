var articlesModule = angular.module('articles', ['ngRoute', 'ngGrid', 'rest.resources']);

articlesModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/articles', {
		templateUrl: 'app/articles/articles-list.tpl.html',
		controller: 'ArticlesListCtrl',
		resolve: { 
			articleList: function($route, Article) {
				return Article.query();
			}
		}
	});
	
	$routeProvider.when('/articles/new', {
		templateUrl: 'app/articles/articles-edit.tpl.html',
		controller: 'ArticlesCreateCtrl'
	});
	
	$routeProvider.when('/articles/:id', {
		templateUrl: 'app/articles/articles-edit.tpl.html',
		controller: 'ArticlesEditCtrl',
		resolve: { 
			article: function($route, Article) {
				return Article.get({id: $route.current.params.id});
			}
		}
	});
}]);

articlesModule.controller('ArticlesListCtrl', ['$scope', '$location', 'articleList', function ($scope, $location, articleList) {
	$scope.articles = articleList;
	
	$scope.articlesGridOptions = { 
		data: 'articles',
		multiSelect: false,
		columnDefs: [
			{ field: 'headline', displayName: 'Headline' },
			{ displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn btn-primary" ng-click="editArticle(row.entity)">Edit</button>' }
		]
	};
	
	$scope.createArticle = function() {
		$location.path('/articles/new');
	};	
	
	$scope.editArticle = function(article) {
		$location.path('/articles/' + article.id);
	};	
}]);

articlesModule.controller('ArticlesCreateCtrl', ['$scope', '$location', 'Article', function ($scope, $location, Article) {
	$scope.article = {};
	
	$scope.update = function() {
		Article.save($scope.article);
		
		$location.path('/articles');
	};
	
	$scope.cancel = function() {
		$location.path('/articles');
	};	
}]);

articlesModule.controller('ArticlesEditCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
	$scope.article = article;
	
	$scope.update = function() {
		Article.save($scope.article);
		
		$location.path('/articles');
	};	
	
	$scope.cancel = function() {
		$location.path('/articles');
	};	
}]);
