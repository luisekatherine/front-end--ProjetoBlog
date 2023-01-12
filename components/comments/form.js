app.directive('commentForm', function () {
  return {
    restrict: 'E',
    scope: {
      postId: '=?',
      currentComment: '=?',
      post: '=?',
      callback: '&?',
    },
    templateUrl: 'views/components/comments/form.html',
    controller: function ($scope, CommentService) {
      $scope.save = () => {
        if ($scope.comment.id) {
          let updateComment = {
            postId: $scope.postId,
            text: $scope.comment.text,
            id: $scope.comment.id,
          };
          
          CommentService.update(updateComment).then(function(response) {
            if (response.error) {
              alert(response.error);
            } else {
              alert("Comentário editado com sucesso!");
              $scope.comment = {};
              if ($scope.callback) {
                $scope.callback();
              }
            }
          })

        } else {
          let createComment = {
            postId: $scope.postId,
            text: $scope.comment.text,
          };
      
          CommentService.create(createComment).then(function(response) {
            if (response.error) {
              alert(response.error);
            } else {
              alert("Comentário enviado com sucesso!");
              $scope.comment = {};
              if ($scope.callback) {
                $scope.callback();
              }
            }
          })
        }
      };

      $scope.editComment = (comment) => {
        $scope.currentComment = comment
      }

      $scope.$watch('currentComment', function(newValue, oldValue){
        if(newValue && newValue != oldValue) {
          $scope.comment.text = $scope.currentComment.text;
          $scope.comment.id = $scope.currentComment.id;
        }
      })
      
      const initialize = () => {
        $scope.comment = {};
      };

      initialize();
    }
  }
});