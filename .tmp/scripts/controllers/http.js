'use strict';

/*  @ngdoc function
  @name myApp.controller:httpCtrl
  @description
  # httpCtrl
  Controller of the myApp
*/

var app = angular.module('myApp', []);
app.controller('httpCtrl', function ($scope, $http) {

  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});

/* Service */
app.service('postsService', postsService);

// moreTextCtrl.$inject = ['$http'];
function postsService($http) {
  this.getData = function () {
    // return $http.get('https://jsonplaceholder.typicode.com/photos')
    return $http.get('http://www.omdbapi.com/?').success(function (response) {
      $scope.post = response.data;
    });
  };
}

app.controller('postsCtrl', moreTextCtrl);

moreTextCtrl.$inject = ['$scope', function search() {
  postsService.getData(vm.searchQuery).then(function (response) {
    vm.post = response.data;
  });
}];

function moreTextCtrl($scope, postsService) {
  var vm = this;
  vm.searchQuery = '';
  // vm.param = ('t': 'star');
  vm.posts = [];
}
//# sourceMappingURL=http.js.map
