angular.module('myApp')
  .component('searchBar', {
    bindings: {
      onSearch: '&'
    },
    templateUrl: '/scripts/components/search-bar/search-bar.html',
    controllerAs: 'ctrl'
  });


