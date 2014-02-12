var artMod = angular.module('articles', ['ngRoute', 'ngGrid', 'rest.resources']);

artMod.loadArticle = function($route, Article) {
	return Article.get({id: $route.current.params.id});
};

artMod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
	
	$routeProvider.when('/articles/edit/:id', {
		templateUrl: 'app/articles/articles-edit.tpl.html',
		controller: 'ArticlesEditCtrl',
		resolve: { 
			article: artMod.loadArticle
		}
	});
	
	$routeProvider.when('/articles/view/:id', {
		templateUrl: 'app/articles/articles-view.tpl.html',
		controller: 'ArticlesViewCtrl',
		resolve: { 
			article: artMod.loadArticle
		}
	});
	
	$routeProvider.when('/articles/remove/:id', {
		templateUrl: 'app/articles/articles-view.tpl.html',
		controller: 'ArticlesRemoveCtrl',
		resolve: { 
			article: artMod.loadArticle
		}
	});
}]);

artMod.controller('ArticlesListCtrl', ['$scope', '$location', 'articleList', function ($scope, $location, articleList) {
	var listActionButtons = createListViewButton('viewArticle(row.entity)') + createListEditButton('editArticle(row.entity)') + createListRemoveButton('removeArticle(row.entity)');

	$scope.articles = articleList;
	
	$scope.articlesGridOptions = { 
		data: 'articles',
		multiSelect: false,
		columnDefs: [
			{ field: 'headline', displayName: 'Headline' },
			{ displayName: '', cellTemplate: listActionButtons }
		]
	};
	
	$scope.createArticle = function() {
		$location.path('/articles/new');
	};	
	
	$scope.editArticle = function(article) {
		$location.path('/articles/edit/' + article.id);
	};	
	
	$scope.viewArticle = function(article) {
		$location.path('/articles/view/' + article.id);
	};	
	
	$scope.removeArticle = function(article) {
		$location.path('/articles/remove/' + article.id);
	};	
}]);

artMod.controller('ArticlesCreateCtrl', ['$scope', '$location', 'Article', function ($scope, $location, Article) {
	$scope.article = {};
	$scope.isCreate = true;
	
	$scope.create = function() {
		Article.save($scope.article, $scope.backToList);
	};	
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles');
	};
}]);

artMod.controller('ArticlesEditCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
	$scope.article = article;
	$scope.isCreate = false;
	
	$scope.update = function() {
		Article.save($scope.article, $scope.backToList);
	};	
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles');
	};
}]);

artMod.controller('ArticlesViewCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
	$scope.article = article;
	$scope.isRemove = false;
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles');
	};
}]);

artMod.controller('ArticlesRemoveCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
	$scope.article = article;
	$scope.isRemove = true;
	
	$scope.remove = function() {
		Article.remove({ id: String($scope.article.id) }, $scope.backToList);
	};

	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles');
	};
}]);
