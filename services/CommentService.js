app.service('CommentService', ['$http', function ($http) {

  const list = (postId) => $http.get('http://localhost:3000/posts/'+postId+'/comments')
    .then(function (response) {
      return response.data;
    });

  const get = (id) => $http.get('http://localhost:3000/comments'+id)
    .then(function (response) {
      return response.data;
    });

  const update = (comment) => $http.put('http://localhost:3000/posts/'+comment.postId+'/comments/'+comment.id, {
    comment: {
      text: comment.text,
    } 
  }).then(function (response) {
    return response.data;
  });

  const create = (comment) => $http.post('http://localhost:3000/posts/'+comment.postId+'/comments', {
    comment: {
      text: comment.text,
    }
  });
  
  const remove = (comment) => $http.delete('http://localhost:3000/posts/'+comment.postId+'/comments/'+comment.id)

  return {
    list: list,
    get: get,
    update: update,
    create: create,
    remove: remove,
    //o primeiro é o nome que vai ser puchado no postsController, o segundo é o nome como eu declarei  na const acima.
  }
}]);