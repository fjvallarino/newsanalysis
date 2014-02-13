<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" ng-app="app">
	<head>
		<title></title>
		<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
		
		<link href="css/ng-grid.css" rel="stylesheet">
		<link href="css/news.css" rel="stylesheet">
		<link href="css/select2.css" rel="stylesheet">
		<link href="css/select2-bootstrap.css" rel="stylesheet">
		
		<script src="js/jquery-1.11.0.min.js"></script>
		<script src="js/select2.min.js"></script>
		
		<script src="js/angular.min.js"></script>
		<script src="js/angular-route.min.js"></script>
		<script src="js/angular-resource.min.js"></script>
		
		<script src="js/ng-grid-2.0.7.min.js"></script>
		<script src="js/ui-bootstrap-tpls-0.10.0.min.js"></script>
		<script src="js/ui-select2.js"></script>
		<script src="js/angular-ui-router.min.js"></script>
		
		<script src="app/app.js"></script>
		<script src="app/rest-resources.js"></script>
		<script src="app/articles/articles.js"></script>
		<script src="app/articles-search-criteria/articles-search-criteria.js"></script>
	</head>

	<body ng-controller="AppCtrl">
		<div class="row">
			<ul class="navigation-bar">
				<li class="navigation-item">
					<a href="#/articles">Articles</a>
				</li>
				<li class="navigation-item">
					<a href="#/articles-search-criteria">Articles search criteria</a>
				</li>
			</ul>
		</div>
		
		<div ng-view class="container-fluid">
			
		</div>
	</body>
</html>
