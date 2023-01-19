app.service('LikeService', ['$http', function ($http) {

  const likePost = (post) => $http.post('http://localhost:3000/posts/'+post.id+'/like');

  const unlikePost = (post) => $http.delete('http://localhost:3000/posts/'+post.id+'/like');

  const likeComment = (post, comment) => $http.post('http://localhost:3000/posts/'+post.id+'/comments/'+comment.id+'/like');

  const unlikeComment = (post, comment) => $http.delete('http://localhost:3000/posts/'+post.id+'/comments/'+comment.id+'/like');

  // verificar: concatenar como comment.postId ou como post.id na parte de comment

  return {
    likePost: likePost,
    unlikePost: unlikePost,
    likeComment: likeComment,
    unlikeComment: unlikeComment,
  }

}])