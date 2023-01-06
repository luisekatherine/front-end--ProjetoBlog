app.controller('PostsController', PostController);

PostController.$inject = [
  '$scope',
  'PostService',
  '$routeParams',
  'type',
];

function PostController ($scope, PostService, $routeParams, type) {
  $scope.save = () => {
    PostService.update($scope.post).then(function (response) {
      if (response.error) {
        $scope.message = response.error
      } else {
        $scope.post = response;
      }
    })
  };


  const initialize = () => {
    if (type =='show' || type == 'form') {
      $scope.post = {};

      PostService.get($routeParams.id).then(function (response) {
        if (response) {
          $scope.post = response;

        }
      });

    } else {
      $scope.posts = [];

      PostService.list().then(function (response) {
        if (response && response.length > 0) {
          $scope.posts = response;

        }
      });
    }
  };
  initialize();
}