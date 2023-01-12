app.service('UserService', ['$http', function ($http) {
  
  const update = (user) => $http.put('http://localhost:3000/user', {
    user: {
      name: user.username,
      email: user.email,
      password: user.password,
    }
  }).then(function (response) {
    return response.data;
  });

  const create = (user) => $http.post('http://localhost:3000/user', {
    user: {
      name: user.username,
      email: user.email,
      password: user.password,
    }
  }).then(function (response) {
    return response.data;
  });

  const get = (id) => $http.get('http://localhost:3000/user/' + id)
    .then(function (response) {
      return response.data;
      });

  return {
    update: update,
    create: create,
    get: get,
    //o primeiro é o nome que vai ser puchado no postsController, o segundo é o nome como eu declarei  na const acima.
  }
}]);