app.config(function($routeProvider, $locationProvider) {
	$routeProvider
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
	.when('/tags', {
		templateUrl: 'views/tags.html',
		controller: 'TagsController'
	})
});

app.config(['$httpProvider', Interceptor]);
function Interceptor($httpProvider) {
	$httpProvider.interceptors.push('Interceptor');
}