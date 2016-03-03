var app = angular.module('kB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/categories', {
			templateUrl: 'views/categories.view.html',
			controller: 'CategoriesCtrl'
		}).
		when('/articles', {
			templateUrl: 'views/articles.view.html',
			controller: 'ArticlesCtrl'
		}).
		when('/articles/details/:id', {
			templateUrl: 'views/articles-details.view.html',
			controller: 'ArticleDetailsCtrl'
		}).
		when('/articles/category/:category', {
			templateUrl: 'views/category-article.view.html',
			controller: 'ArticlesCategoryCtrl'
		}).
		when('/articles/add', {
			templateUrl: 'views/add-article.view.html',
			controller: 'ArticleCreateCtrl'
		}).
		when('/articles/edit/:id', {
			templateUrl: 'views/edit-article.view.html',
			controller: 'ArticleEditCtrl'
		}).
		otherwise({redirectTo: '/categories'})
}]);