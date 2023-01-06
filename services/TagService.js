app.service('TagService', ['$http', function ($http) {
  
  const list = () => $http.get('http://localhost:3000/tags')
    .then(function (response) {
      return response.data;
      });

  const get = (id) => $http.get('http://localhost:3000/tags/'+id)
    .then(function (response) {
      return response.data;
      });

  const update = (tag) => $http.put('http://localhost:3000/tags/'+tag.id, {
    name: tag.name,
   })
    .then(function (response) {
      return response.data;
      });

  const create = (tag) => $http.post('http://localhost:3000/tags/', {
    name: tag.name,
   })
    .then(function (response) {
      return response.data;
      });

  return {
    list: list,
    get: get,
    update: update,
    create: create,
    //o primeiro é o nome que vai ser puchado no postsController, o segundo é o nome como eu declarei  na const acima.
  }
}]);