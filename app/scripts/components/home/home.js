angular.module('myApp')
  .component('home-page', {
    bindings: {
      movies: '<'
    },
    templateUrl: '/scripts/components/home/home.html',
    controllerAs: 'vm',
    controller: function () {
      var vm = this;
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 1;

      // vm.movies = config.topMovies
    }
  });


