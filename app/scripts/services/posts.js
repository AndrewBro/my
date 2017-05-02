angular.module('myApp')
  .service('postsService', Service);

Service.$inject = ['$http'];

function Service($http) {

  this.getMovies = function (text, year, type) {
    return $http.get('http://www.omdbapi.com/', {
      params: {
        s: text,
        y: year,
        type: type
      },
    })
  };

  this.getFullMovie = function (imdbID) {
    return $http.get('http://www.omdbapi.com/', {
      params: {
        i: imdbID,
        plot: 'full'
      }
    });
  }
}
