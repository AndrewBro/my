app.service('postsService', postsService);

postsService.$inject = ['$http'];

function postsService($http) {
  this.getData = function(searchQuery) {
    return $http.get('https://www.omdbapi.com/', {
      params: {
        t: searchQuery
      }
    })
  }
}


// components/componentTwo/index.js
angular.module('myApp')
  .component('searchBar', {
    bindings: {
      onSearch: '&'
    },
    templateUrl:"/components/search/search.html",
    // template: '<input type="text" ng-change="ctrl.onSearch({text: ctrl.model})" ng-model="ctrl.model"/>',
    controllerAs: 'post'
  });




// angular.module('myApp')
//   .component('searchBar', {
//     templateUrl:"/components/search/search.html"
//
//   });
//
