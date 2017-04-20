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

app.directive('searchBar', function() {
  return {
    templateUrl:"/components/search/search.html"
  }
});


