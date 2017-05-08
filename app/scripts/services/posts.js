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


  this.getFullMovie = function (mId) {
    console.log(mId, 'MID !!!!');
    return $http.get('http://localhost:3012/movies/' + mId);
  }
}
