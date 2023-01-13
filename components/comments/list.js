app.directive('commentList', function () {
  return {
    restrict: 'E',
    scope: {
      postId: '=',
    },
    templateUrl: 'views/components/comments/list.html',
    controller: function ($scope, CommentService) {
      const initialize = () => {
        $scope.loading = true;
        $scope.comments = [];

        CommentService.list($scope.postId).then((result) => {
          if (result) {
            $scope.comments = result;
            $scope.loading = false;
          }
        });

        CommentService.update($scope.comment).then(function (response) {
          if (response) {
            $location.path('/comments/'+$scope.comment.id)
            } else {
              $scope.comment = {};
            }
          })
        };
        
      initialize();
    }
  }
});