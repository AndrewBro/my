angular.module('myApp')
  .service('postsService', Service);

Service.$inject = ['$http'];

function Service($http) {

  this.getMovies = function (text, year, type) {
    return $http.get('http://localhost:3012/movies', {
      params: {
        t: text
      },
    })
  };

  this.getFullMovie = function (id) {
    return $http.get('http://localhost:3012/movies/' + id);
  }
}
