var artmod = angular.module('articles', ['ngRoute', 'ngGrid', 'rest.resources', 'ui.bootstrap', 'ui.select2']);

artmod.loadArticle = function($route, Article) {
	return Article.get({id: $route.current.params.id});
};

artmod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/articles', {
		templateUrl: 'app/articles/articles-list.tpl.html',
		controller: 'ArticlesListCtrl',
		resolve: { 
			articleList: function($route, Article) {
				return Article.query();
			},
			
			articleSearchCriteriaList: function($route, ArticleSearchCriteria) {
				return ArticleSearchCriteria.query();
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
			article: artmod.loadArticle
		}
	});
	
	$routeProvider.when('/articles/view/:id', {
		templateUrl: 'app/articles/articles-view.tpl.html',
		controller: 'ArticlesViewCtrl',
		resolve: { 
			article: artmod.loadArticle
		}
	});
	
	$routeProvider.when('/articles/remove/:id', {
		templateUrl: 'app/articles/articles-view.tpl.html',
		controller: 'ArticlesRemoveCtrl',
		resolve: { 
			article: artmod.loadArticle
		}
	});
}]);

artmod.controller('ArticlesListCtrl', ['$scope', '$location', 'ArticleSearch', 'articleList', 'articleSearchCriteriaList', function ($scope, $location, ArticleSearch, articleList, articleSearchCriteriaList) {
	var listActionButtons = createListViewButton('view(row.entity)') + createListEditButton('edit(row.entity)') + createListRemoveButton('remove(row.entity)');

	$scope.articles = articleList;
	$scope.articleSearchCriteriaList = articleSearchCriteriaList;
	$scope.searchCriteria = { articleSearchCriteriaId: null };
	
	$scope.$watch('searchCriteria.articleSearchCriteriaId', function(newValue, oldValue) {
		if(newValue != oldValue) {
			$scope.articles = ArticleSearch.search($scope.searchCriteria);
		}
	});
	
	$scope.articlesGridOptions = { 
		data: 'articles',
		multiSelect: false,
		columnDefs: [
			{ field: 'headline', displayName: 'Headline' },
			{ displayName: '', cellTemplate: listActionButtons }
		]
	};
	
	$scope.create = function() {
		$location.path('/articles/new');
	};	
	
	$scope.edit = function(article) {
		$location.path('/articles/edit/' + article.id);
	};	
	
	$scope.view = function(article) {
		$location.path('/articles/view/' + article.id);
	};	
	
	$scope.remove = function(article) {
		$location.path('/articles/remove/' + article.id);
	};	
}]);

artmod.controller('ArticlesCreateCtrl', ['$scope', '$location', 'Article', function ($scope, $location, Article) {
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

	$scope.dateOptions = {
		'year-format': "'yyyy'",
		'starting-day': 1
	};
	
	$scope.openArticleDate = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedArticleDate = true;
	};
	
	$scope.openDetectedDate = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedDetectedDate = true;
	};
}]);

artmod.controller('ArticlesEditCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
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

	$scope.dateOptions = {
		'year-format': "'yyyy'",
		'starting-day': 1
	};
	
	$scope.openArticleDate = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedArticleDate = true;
	};
	
	$scope.openDetectedDate = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedDetectedDate = true;
	};
}]);

artmod.controller('ArticlesViewCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
	$scope.article = article;
	$scope.isRemove = false;
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles');
	};
}]);

artmod.controller('ArticlesRemoveCtrl', ['$scope', '$location', 'Article', 'article', function ($scope, $location, Article, article) {
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
