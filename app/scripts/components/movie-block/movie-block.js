angular.module('myApp')
  .component('movieBlock', {
    bindings: {
      movie: '<'
      // movieId
    },
    templateUrl: '/scripts/components/movie-block/movie-block.html',
  });

// postsService.getFullMovie(movie.imdbID)
//   .then(function (resp) {
//     vm.movies[index] = resp.data;
//     // vm.movies[index].isDataLoaded = true;
//   })
