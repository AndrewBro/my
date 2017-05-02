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

    // vm.title = (type === undefined && vm.title !== '') ? vm.title : 'Drama';
    // vm.title = text || vm.title;
    vm.isDataLoaded = false;

    postsService.getMovies(title, year, type)
      .then(function (resp) {
        vm.movies = resp.data.Search;
        vm.isDataLoaded = true;
      });
  };

  // resp.data.Search[0].Poster
  vm.search('2016'); // todo remove
}
