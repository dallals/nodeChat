app.factory('mainFactory', ['$http', '$location', function($http, $location){

	var factory = {};
	var company = [];

		factory.getCompanies = function(callback){
			$http.get('/companies').then(function(data){
				console.log(data)
				companies = data;
				callback(companies)
			})
		}

	return factory;
}])