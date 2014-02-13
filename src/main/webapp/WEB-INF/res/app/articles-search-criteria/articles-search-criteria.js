var ascmod = angular.module('articlesSearchCriteria', ['ngRoute', 'ngGrid', 'rest.resources', 'ui.bootstrap']);

ascmod.loadArticleSearchCriteria = function($route, ArticleSearchCriteria) {
	return ArticleSearchCriteria.get({id: $route.current.params.id});
};

ascmod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/articles-search-criteria', {
		templateUrl: 'app/articles-search-criteria/articles-search-criteria-list.tpl.html',
		controller: 'ArticlesSearchCriteriaListCtrl',
		resolve: { 
			articleSearchCriteriaList: function($route, ArticleSearchCriteria) {
				return ArticleSearchCriteria.query();
			}
		}
	});
	
	$routeProvider.when('/articles-search-criteria/new', {
		templateUrl: 'app/articles-search-criteria/articles-search-criteria-edit.tpl.html',
		controller: 'ArticlesSearchCriteriaCreateCtrl'
	});
	
	$routeProvider.when('/articles-search-criteria/edit/:id', {
		templateUrl: 'app/articles-search-criteria/articles-search-criteria-edit.tpl.html',
		controller: 'ArticlesSearchCriteriaEditCtrl',
		resolve: { 
			articleSearchCriteria: ascmod.loadArticleSearchCriteria
		}
	});
	
	$routeProvider.when('/articles-search-criteria/view/:id', {
		templateUrl: 'app/articles-search-criteria/articles-search-criteria-view.tpl.html',
		controller: 'ArticlesSearchCriteriaViewCtrl',
		resolve: { 
			articleSearchCriteria: ascmod.loadArticleSearchCriteria
		}
	});
	
	$routeProvider.when('/articles-search-criteria/remove/:id', {
		templateUrl: 'app/articles-search-criteria/articles-search-criteria-view.tpl.html',
		controller: 'ArticlesSearchCriteriaRemoveCtrl',
		resolve: { 
			articleSearchCriteria: ascmod.loadArticleSearchCriteria
		}
	});
}]);

ascmod.controller('ArticlesSearchCriteriaListCtrl', ['$scope', '$location', 'articleSearchCriteriaList', function ($scope, $location, articleSearchCriteriaList) {
	var listActionButtons = createListViewButton('view(row.entity)') + createListEditButton('edit(row.entity)') + createListRemoveButton('remove(row.entity)');

	$scope.articlesSearchCriteria = articleSearchCriteriaList;
	
	$scope.articlesSearchCriteriaGridOptions = { 
		data: 'articlesSearchCriteria',
		multiSelect: false,
		columnDefs: [
			{ field: 'name', displayName: 'Name' },
			{ field: 'articleDateFrom | date: "dd/MM/yyyy"', displayName: 'Article date from' },
			{ field: 'articleDateTo | date: "dd/MM/yyyy"', displayName: 'Article date to' },
			{ displayName: '', cellTemplate: listActionButtons }
		]
	};
	
	$scope.create = function() {
		$location.path('/articles-search-criteria/new');
	};	
	
	$scope.edit = function(articleSearchCriteria) {
		$location.path('/articles-search-criteria/edit/' + articleSearchCriteria.id);
	};	
	
	$scope.view = function(articleSearchCriteria) {
		$location.path('/articles-search-criteria/view/' + articleSearchCriteria.id);
	};	
	
	$scope.remove = function(articleSearchCriteria) {
		$location.path('/articles-search-criteria/remove/' + articleSearchCriteria.id);
	};
}]);

ascmod.controller('ArticlesSearchCriteriaCreateCtrl', ['$scope', '$location', 'ArticleSearchCriteria', function ($scope, $location, ArticleSearchCriteria) {
	$scope.articleSearchCriteria = {};
	$scope.isCreate = true;
	
	$scope.create = function() {
		ArticleSearchCriteria.save($scope.articleSearchCriteria, $scope.backToList);
	};
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles-search-criteria');
	};

	$scope.dateOptions = {
		'year-format': "'yyyy'",
		'starting-day': 1
	};
	
	$scope.openArticleDateFrom = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedArticleDateFrom = true;
	};
	
	$scope.openArticleDateTo = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedArticleDateTo = true;
	};
}]);

ascmod.controller('ArticlesSearchCriteriaEditCtrl', ['$scope', '$location', 'ArticleSearchCriteria', 'articleSearchCriteria', function ($scope, $location, ArticleSearchCriteria, articleSearchCriteria) {
	$scope.articleSearchCriteria = articleSearchCriteria;
	$scope.isCreate = false;
	
	$scope.update = function() {
		ArticleSearchCriteria.save($scope.articleSearchCriteria, $scope.backToList);
	};	
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles-search-criteria');
	};

	$scope.dateOptions = {
		'year-format': "'yyyy'",
		'starting-day': 1
	};
	
	$scope.openArticleDateFrom = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedArticleDateFrom = true;
	};
	
	$scope.openArticleDateTo = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.openedArticleDateTo = true;
	};
}]);

ascmod.controller('ArticlesSearchCriteriaViewCtrl', ['$scope', '$location', 'ArticleSearchCriteria', 'articleSearchCriteria', function ($scope, $location, ArticleSearchCriteria, articleSearchCriteria) {
	$scope.articleSearchCriteria = articleSearchCriteria;
	$scope.isRemove = false;
	
	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles-search-criteria');
	};
}]);

ascmod.controller('ArticlesSearchCriteriaRemoveCtrl', ['$scope', '$location', 'ArticleSearchCriteria', 'articleSearchCriteria', function ($scope, $location, ArticleSearchCriteria, articleSearchCriteria) {
	$scope.articleSearchCriteria = articleSearchCriteria;
	$scope.isRemove = true;
	
	$scope.remove = function() {
		ArticleSearchCriteria.remove({ id: String($scope.articleSearchCriteria.id) }, $scope.backToList);
	};

	$scope.cancel = function() {
		$scope.backToList();
	};
	
	$scope.backToList = function() {
		$location.path('/articles-search-criteria');
	};
}]);
