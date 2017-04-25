angular.module('myApp')
  .component('movieBlock', {
    bindings: {
      movie: '<'
    },
    templateUrl: '/scripts/components/movie-block/movie-block.html',
  });

