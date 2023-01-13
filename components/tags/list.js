app.directive('tagForm', function () {
  restrict: 'E',
    scope: {
      postId: '=?',
      currentComment: '=?',
      post: '=?',
      callback: '&?',
    },
})