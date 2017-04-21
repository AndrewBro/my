
app.controller('postCtrl', postCtrl);

postCtrl.$inject = ['$scope', 'postsService'];

function postCtrl($scope, postsService) {
  var vm = this;
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
    scope: true,
    templateUrl: '/components/posts/posts.html'
  };
});




















// angular.module('myApp')
//   .component('movieBlock', {
//     templateUrl:"/components/posts/posts.html"
//   });



// // components/componentOne/index.js
// angular.module('myApp')
//   .component('movieBlock', {
//     templateUrl:"/components/posts/posts.html"
//     // template: '<h1>This is the Component One</h1>'
//   });
