// app.directive('unlinkTag', function () {
//   return {
//     restrict: 'E',
//     scope: {
//       post: '=',
//       unlinkTag: '&?',
//     },
//     templateUrl: 'views/components/tags/unlink-tag.html',
//     controller: function ($scope, TagService) {

//       $scope.tags = [];
//       TagService.list().then(function (response) {
//         if (response && response.length > 0) {
//           $scope.tags = response;
//         }
//       });

//       $scope.unlink = (tag) => {
//         TagService.unlinkPostTag($scope.post, tag).then(function (response) {
//           $scope.onLinkTag();
//         })
//       }
//     }
//   }
// })