app.controller('blogController', ['$rootScope', '$scope', 'BlogService', '$window', function ($rootScope, $scope, BlogService, $window,){
	$scope.login = {
		username: null,
		password: null
	}
	$rootScope.currentUser = {};

	$scope.user = {
		username: null,
		password: null,
		email: null,
	}
	
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
				$rootScope.currentUser = {
					name: response.name,
					id: response.id
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
		$rootScope.currentUser = {};
	}
	
	const initialize = () => {
		let token = window.localStorage.getItem('token');
		
		if (token) {
			$rootScope.currentUser = {
				id: window.localStorage.getItem('id'),
				name: window.localStorage.getItem('name')
			}
		}
	}
	initialize();
}]);




