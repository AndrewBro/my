angular.module('myApp')
  .component('movieBlock', {
    bindings: {
      imdbId: '<'
    },
    controller: Controller,
    controllerAs: 'mvVm',
    templateUrl: '/scripts/components/movie-block/movie-block.html'
  });


Controller.$inject = ['$scope', 'postsService'];
function Controller($scope, postsService) {
  var vm = this;

  vm.$onInit = function () {
    console.log(vm.imdbId);
    postsService.getFullMovie(vm.imdbId)
      .then(function (resp) {
        vm.movie = resp.data;
      });
  };
}






















// angular.module('myApp')
//   .component('movieBlock', {
//     bindings: {
//       imdbId: '<'
//     },
//     controller: Controller,
//     controllerAs: 'mvVm',
//     templateUrl: '/scripts/components/movie-block/movie-block.html'
//   });
//
//
// Controller.$inject = ['$scope', 'postsService'];
// function Controller($scope, postsService) {
//   var vm = this;
//
//   vm.$onInit = function () {
//     console.log(vm.imdbId);
//     postsService.getFullMovie(vm.imdbId)
//       .then(function (resp) {
//         vm.movie = resp.data;
//       });
//   };
// }
