
app.controller('mainController', ["$scope", 'mainFactory', '$http', '$routeParams', '$location', 
	function($scope, mainFactory, $http, $routeParams, $location){
		
		mainFactory.getCompanies(function(data){
			console.log(data)
			$scope.companies = data;
	});

}])