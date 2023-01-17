app.directive('linkTag', function () {
  return {
    restrict: 'E',
    scope: {
      post: '=',
      onLinkTag: '&?',
    },
    templateUrl: 'views/components/tags/link-tag.html',
    controller: function ($scope, TagService) {

      $scope.tags = [];
      TagService.list().then(function (response) {
        if (response && response.length > 0) {
          $scope.tags = response;
        }
      });

      $scope.link = (tag) => {
        TagService.linkPostTag($scope.post, tag).then(function (response) {
          $scope.onLinkTag();
        })
      }

      $scope.unlink = (tag) => {
        TagService.unlinkPostTag($scope.post, tag).then(function (response) {
          $scope.onLinkTag();
        })
      }

      $scope.tagOnPost = (tag) => {
        return $scope.post.tags.map((t)=>t.id).includes(tag.id)
      }

    }
  }
})