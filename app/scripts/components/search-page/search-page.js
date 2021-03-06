
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

    vm.isDataLoaded = false;

    postsService.getMovies(title, year, type)
      .then(function (resp) {
        vm.movies = resp.data;
        // console.log(vm.movies, 'vm.movies !!!!!');
        vm.isDataLoaded = true;
    });
  };
}
