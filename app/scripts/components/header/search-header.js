angular.module('myApp')
  .component('searchHeader', {
    bindings: {
      movies: '<'
    },
    templateUrl: '/scripts/components/header/header.html',
    controllerAs: 'vm',
    controller: function () {
      var vm = this;
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 1;
    }
  });


