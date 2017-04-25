angular.module('myApp')
  .component('searchPage', {
    templateUrl: '/scripts/components/search-page/search-page.html',
    controller: Controller,
    controllerAs: 'vm'
  });

Controller.$inject = ['postsService'];

////////////
angular.module('ngMessagesExample', ['ngMessages']);

function Controller(postsService) {
  const vm = this;
  vm.movies = [];
  vm.title = '';

  vm.search = function (text, year) {

    if(text === undefined && vm.title === '') {

    }
    vm.title = (text === undefined && vm.title !== '') ? vm.title :  'Comedy';


    // vm.title = text || vm.title;

    postsService.getMovies(vm.title, year)
      .then(function (resp) {
        vm.movies = resp.data.Search;
        getEachMovie(vm.movies);
        // console.log(vm.search)
      });

  };

  function getEachMovie(list) {

    list.forEach(function (movie, index) {
      postsService.getFullMovie(movie.imdbID)
        .then(function (resp) {
          vm.movies[index] = resp.data;
          // vm.movies[index].isDataLoaded = true;
        })
    });
  }

  // vm.search('2016'); // todo remove
}
