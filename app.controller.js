app.controller('blogController', ['$scope', 'BlogService', function ($scope, BlogService){
	$scope.login = {
		username: null,
		password: null
	}
	$scope.currentUser = {};
	
	$scope.submitLogin = () => {
		BlogService.login($scope.login).then(function (response) {
			if (response.error) {
				$scope.message = response.error;
			} else {
				$scope.message = null;
				window.localStorage.setItem('token', response.token);
				window.localStorage.setItem('name', response.name);
				window.localStorage.setItem('id', response.id);
				window.localStorage.setItem('email', response.email);
				$scope.currentUser = {
					name: response.name
				}
			}
		});
	};
	$scope.notLogged = () => {
		return !window.localStorage.getItem('token');
	};
	$scope.logged = () => {
		return window.localStorage.getItem('token');
	};

	$scope.logoff = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('name');
		window.localStorage.removeItem('id');
		window.localStorage.removeItem('email');
		$scope.currentUser = {};
	}
	
	const initialize = () => {
		let token = window.localStorage.getItem('token');
		
		if (token) {
			$scope.currentUser = {
				name: window.localStorage.getItem('name')
			}
		}
	}

	initialize();
}]);




