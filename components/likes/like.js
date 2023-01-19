app.directive('like', function () {
  return {
    restrict: 'E',
    scope: {
      post: '=?',
      comment: '=?',
      like: '=?',
    },
    templateUrl: 'views/components/likes/like.html',
    controller: function ($scope, LikeService, $window, $location) {

      $scope.likePost = () => {
        LikeService.likePost($scope.post).then(function (response) {
          $scope.post.liked = true
          // $window.location.reload();
        })
      }

      $scope.unlikePost = () => {
        LikeService.unlikePost($scope.post).then(function (response) {
          // $window.location.reload();
          $scope.post.liked = false
        })
      }

      $scope.likeComment = () => {
        LikeService.likeComment($scope.post, $scope.comment).then(function (response) {
          // $window.location.reload();
          $scope.comment.liked = true
        })
      }

      $scope.unlikeComment = () => {
        LikeService.unlikeComment($scope.post, $scope.comment).then(function (response) {
          // $window.location.reload();
          $scope.comment.liked = false
        })
      }

    }
  }
})