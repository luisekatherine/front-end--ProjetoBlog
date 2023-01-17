app.controller('UsersController', UserController);

UserController.$inject = [
  '$scope',
  'UserService',
  '$routeParams',
  'type',
  '$location'
];

function UserController ($scope, UserService, $routeParams, type, $location) {
  $scope.save = () => {
    if ($scope.user.id) {
      $scope.update();
      } else {
        $scope.create();
      }
    };    

  $scope.update = (user) => {
    UserService.update(user).then(function (response) {
      if (response) {
        window.localStorage.setItem('name', response.name);
        window.localStorage.setItem('email', response.email);
        alert('Usuário alterado!')
        $location.path('/posts')
      } else {
        $scope.user = {};
      }
    })
  }
  
  $scope.createAccount = (user) => {
    UserService.create(user).then(function (response) {
      if (response) {
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('name', response.name);
        window.localStorage.setItem('id', response.id);
        window.localStorage.setItem('email', response.email);
        $scope.currentUser = {
          id: window.localStorage.getItem('id'),
          name: window.localStorage.getItem('name'),
          email: window.localStorage.getItem('email'),
          password: window.localStorage.getItem('password')
        }
        $scope.message = null;
        $location.path('/posts')
      } else {
        $scope.user = {};
      }
    })
  }

  $scope.save = (user) => {
    if (type == 'create') {
      $scope.createAccount(user);
    } else {
      $scope.update(user);
    }
  };

  const initialize = () => {
    if (type == 'update') {
      UserService.get($routeParams.id).then(function (response) {
        $scope.user = {
          id: response.id,
          username: response.name,
          email: response.email,
          password: response.password
        }
      });
    } else {
      $scope.user = {};
    }
  }
  initialize();
}