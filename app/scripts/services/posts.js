angular.module('myApp')
  .service('postsService', Service);

Service.$inject = ['$http'];

function Service($http) {
  /**
   * Promise
   */
  this.getMovies = function (text, year) {
    return $http.get('http://www.omdbapi.com/', {
      params: {
        s: text, year: year
      },
    })
  };

  this.getFullMovie = function (imdbID) {
    return $http.get('http://www.omdbapi.com/', {
      params: {
        i: imdbID
      },
      plot: 'full'
    });
  }
}
