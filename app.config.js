app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	
	.when('/posts/new', {
		templateUrl: 'views/posts/form.html',
		controller: 'PostsController',
		resolve: {
			type: () => {
				return 'create'
			}
		}
	})

	.when('/posts', {
		templateUrl: 'views/posts/index.html',
		controller: 'PostsController',
		resolve: {
			type: () => {
				return 'index'
			}
		}
	})
	.when('/posts/:id', {
		templateUrl: 'views/posts/show.html',
		controller: 'PostsController',
		resolve: {
			type: () => {
				return 'show'
			}
		}
	})
	.when('/posts/:id/edit', {
		templateUrl: 'views/posts/form.html',
		controller: 'PostsController',
		resolve: {
			type: () => {
				return 'form'
			}
		}
	})
	/*tags*/
	.when('/tags/new', {
		templateUrl: 'views/tags/form.html',
		controller: 'TagsController',
		resolve: {
			type: () => {
				return 'create'
			}
		}
	})
	.when('/tags', {
		templateUrl: 'views/tags/index.html',
		controller: 'TagsController',
		resolve: {
			type: () => {
				return 'index'
			}
		}
	})
	.when('/tags/:id/edit', {
		templateUrl: 'views/tags/form.html',
		controller: 'TagsController',
		resolve: {
			type: () => {
				return 'form'
			}
		}
	})
});

app.config(['$httpProvider', Interceptor]);
function Interceptor($httpProvider) {
	$httpProvider.interceptors.push('Interceptor');
}