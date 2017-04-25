angular.module('myApp')
  .component('searchPage', {
    templateUrl: '/scripts/components/search-page/search-page.html',
    controller: Controller,
    controllerAs: 'vm'
  });
Controller.$inject = ['postsService'];

function Controller(postsService) {
  const vm = this;
  vm.movies = [];


  vm.search = function (text) {
    postsService.getMovies(text)
      .then(function (resp) {
        vm.movies = resp.data.Search;
        getEachMovie(vm.movies);
      });
  };

  function getEachMovie(list) {
    list.forEach(function (movie, index) {
      postsService.getFullMovie(movie.imdbID)
        .then(function (resp) {
          vm.movies[index] = resp.data;
          vm.movies[index].isDataLoaded = true;
        })
    });
  }

}
