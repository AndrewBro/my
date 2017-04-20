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


app.directive('habraHabr', function() {
    return {
      template:"<span>Hello Habr!</span>"
    }
  });



// app.component('comp',{
//   templateUrl: './comp.html',
//   controller: [function () {
//
//   }]
// });





