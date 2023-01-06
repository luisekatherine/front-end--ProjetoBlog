app.service('PostService', ['$http', function ($http) {
  
  const list = (params) => $http.get('http://localhost:3000/posts')
    .then(function (response) {
      return response.data;
      });

  const get = (id) => $http.get('http://localhost:3000/posts/'+id)
    .then(function (response) {
      return response.data;
      });

  const update = (post) => $http.put('http://localhost:3000/posts/'+post.id, {
    title: post.title,
    description: post.description,
   })
    .then(function (response) {
      return response.data;
      });

  const create = (post) => $http.post('http://localhost:3000/posts/', {
    title: post.title,
    description: post.description,
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