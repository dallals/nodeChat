var app = angular.module('app', ['ngRoute']);

(function(){
	app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: "partials/index.html",
				controller: 'mainController'
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}()); 
