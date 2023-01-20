
app.service('BlogService', ['$http', function ($http) {
	let login = (params) => $http.post("http://localhost:3000/login", {
		email: params.username,
		password: params.password
	}).then(function (response){
		return response.data
	});

	return {
		login: login
	}
}]);

