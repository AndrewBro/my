
angular.module('myApp')
  .component('movieBlock', {
    bindings: {
      id: '<'
    },
    controller: Controller,
    controllerAs: 'vm',
    templateUrl: '/scripts/components/movie-block/movie-block.html'
  });


Controller.$inject = ['$scope', 'postsService'];
function Controller($scope, postsService) {
  var vm = this;
  // console.log(vm);

  vm.$onInit = function () {

    postsService.getFullMovie(vm)
      .then(function (resp) {

        vm.movie = resp.data;
      });
    console.log(vm);
  };
}
