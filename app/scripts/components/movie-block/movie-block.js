
angular.module('myApp')
  .component('movieBlock', {
    bindings: {
      id: '<'
    },
    controller: Controller,
    controllerAs: 'mvVm',
    templateUrl: '/scripts/components/movie-block/movie-block.html'
  });


Controller.$inject = ['$scope', 'postsService'];
function Controller($scope, postsService) {
  var vm = this;

  vm.$onInit = function () {
    console.log(vm.id);
    postsService.getFullMovie(vm.id)
      .then(function (resp) {
        vm.movie = resp.data;
      });
  };
}
