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

angular.module('myApp')
  .component('searchBar', {
    templateUrl:"/components/search/search.html"

  });

