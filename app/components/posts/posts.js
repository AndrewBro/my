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


// angular.module('myApp')
//   .component('movieBlock', {
//     templateUrl:"/components/posts/posts.html"
//   });


angular.module('myApp')
  .component('movieBlock', {
    require:  'ngChange',
    bindings: {
      onSearch: '&'
    },
    templateUrl:"/components/posts/posts.html",
    controllerAs: 'ctrl'
  });
