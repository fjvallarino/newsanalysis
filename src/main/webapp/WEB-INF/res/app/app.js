var appModule = angular.module('app', [
	'ngRoute',
	'ngResource',
	'articles',
	'articlesSearchCriteria',
]);

// Routes configuration
appModule.config(function ($routeProvider, $locationProvider) {
	// Queda deshabilitado hasta tanto se configure un Apache
	//$locationProvider.html5Mode(true);
	$routeProvider.otherwise({ redirectTo: '/articles' });
});

// Controller
appModule.controller('AppCtrl', function($scope) {
	$scope.startDate = new Date();
});

function createListViewButton(action) {
	return '<button type="button" class="btn btn-primary btn-xs btn-list-action" ng-click="' + action + '">View</button>';
}

function createListEditButton(action) {
	return '<button type="button" class="btn btn-success btn-xs btn-list-action" ng-click="' + action + '">Edit</button>';
}

function createListRemoveButton(action) {
	return '<button type="button" class="btn btn-danger btn-xs btn-list-action" ng-click="' + action + '">Remove</button>';
}
