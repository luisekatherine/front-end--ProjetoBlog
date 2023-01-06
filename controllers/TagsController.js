app.controller('TagsController', TagController);

TagController.$inject = [
  '$scope',
  'TagService',
  '$routeParams',
  'type',
  '$location'
];

function TagController ($scope, TagService, $routeParams, type, $location) {
  $scope.save = () => {
    if ($scope.tag.id) {
      $scope.update();
      } else {
        $scope.create();
      }
    };    

  $scope.update = () => {
    TagService.update($scope.tag).then(function (response) {
      if (response) {
        $location.path('/tags/'+$scope.tag.id)
      } else {
        $scope.tag = {};
      }
    })
  }
  
  $scope.create = () => {
    TagService.create($scope.tag).then(function (response) {
      if (response) {
        $location.path('/tags/'+ response.id)
      } else {
        $scope.tag = {};
      }
    })
  }
  

  const initialize = () => {
    if (type == 'form') {
      $scope.tag = {};

      TagService.get($routeParams.id).then(function (response) {
        if (response) {
          $scope.tag = response;
        }
      });
    } else {
      $scope.tags = [];

      TagService.list().then(function (response) {
        if (response && response.length > 0) {
          $scope.tags = response;
        }
      });
    }
  };

  initialize();
}