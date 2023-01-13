app.directive('delete', function () {
  return {
    restrict: 'E',
    scope: {
      post: '=?',
      tag: '=?',
      comment: '=?',
    },
    templateUrl: 'views/components/action/delete.html',
    controller: function ($scope, $window, CommentService, TagService, PostService, $location) {
      $scope.deleteComment = (comment, post) => {
        let deleteComment = {
          postId: post.id,
          id: comment.id,
        }
        CommentService.remove(deleteComment).then(function(response) { 
          $window.location.reload();
        });
      };

      $scope.deletePost = (post) => {
        PostService.remove(post.id).then(function (response) {
          $location.path('/posts');
        });
      }

      $scope.deleteTag = (tag) => {
        TagService.remove(tag.id).then(function (response) {
          $window.location.reload();
        });
      }
    }
  }
});