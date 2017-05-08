
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

  vm.$onInit = function () {

    var mId = vm.id;
    postsService.getFullMovie(mId)
      .then(function (resp) {
        mId = resp.data;
        // console.log(mId.Title, 'mId !!!!');
      });
  };
}
