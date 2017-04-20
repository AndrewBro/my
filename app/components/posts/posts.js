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


app.directive('movieBlock', function() {
    return {
      templateUrl:"/components/posts/posts.html"
    }
  });






