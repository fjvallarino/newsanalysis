var appModule = angular.module('app', [
	'ngRoute',
	'ngResource',
	'articles'
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
