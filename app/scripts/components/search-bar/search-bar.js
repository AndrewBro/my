
angular.module('myApp')
  .component('searchBar', {
    bindings: {
      onSearch: '&'
    },
    templateUrl: '/scripts/components/search-bar/search-bar.html',
    controller: ['$scope', function ($scope) {
      var vm = this;

      vm.search = function () {
        vm.onSearch({
          title: vm.title,
          year: vm.year,
          type: vm.type
        })
      }
    }],
    controllerAs: 'ctrl'
  });

