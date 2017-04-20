app.controller('postCtrl', postCtrl);

postCtrl.$inject = ['$scope', 'postsService'];

function postCtrl($scope, postsService) {
  const vm = this;
  vm.searchQuery = '';
  vm.post = null;

  vm.search = function() {
    postsService.getData(vm.searchQuery)
      .then(function(response) {
        vm.post = response.data;
      });
  };
}


angular.module('myApp')
  .component('movieBlock', {
    // templateUrl:"/components/search/search.html"
    templateUrl:"/components/posts/posts.html"
  });






