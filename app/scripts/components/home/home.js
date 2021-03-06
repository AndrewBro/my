
angular.module('myApp')
  .component('homePage', {
    templateUrl: '/scripts/components/home/home.html',
    controllerAs: 'vm',
    controller: Controller
  });

Controller.$inject = ['$scope', 'postsService'];
function Controller($scope, postsService) {
  var vm = this;

  postsService.getMovies()
    .then(function (response) {

      vm.movies = response.data.Search;
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 1;
    })
}


