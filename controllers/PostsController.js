app.controller('PostsController', PostController);

PostController.$inject = [
  '$scope',
  'PostService',
  '$routeParams',
  'type',
  '$location',
  'CommentService',
];

function PostController ($scope, PostService, $routeParams, type, $location, CommentService) {
  $scope.save = () => {
    if ($scope.post.id) {
      $scope.update();
      } else {
        $scope.create();
      }
    };    

  $scope.update = () => {
    PostService.update($scope.post).then(function (response) {
      if (response) {
        $location.path('/posts/'+$scope.post.id)
      } else {
        $scope.post = {};
      }
    })
  }
  
  $scope.create = () => {
    PostService.create($scope.post).then(function (response) {
      if (response) {
        $location.path('/posts/'+ response.id)
      } else {
        $scope.post = {};
      }
    })
  }

  $scope.onComment = () => {
    CommentService.list($scope.post.id).then(function(response){
      $scope.post.comments = response
    })
  }

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