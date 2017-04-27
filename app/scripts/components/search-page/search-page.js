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
  vm.title = '';

  vm.search = function (title, year, type) {
    if (!title) {
      alert('Please, enter title');
      return;
    }

    postsService.getMovies(title, year, type)
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
        })
    });
  }

  // resp.data.Search[0].Poster
  // console.log(vm.search('test'));
  // vm.search('2016'); // todo remove
  // console.log(postsService.movie )
}
