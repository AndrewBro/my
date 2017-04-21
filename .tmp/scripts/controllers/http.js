'use strict';

var app = angular.module('myApp', []);

app.controller('postCtrl', function ($scope, $http) {

  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});

// main.js
// angular.module('myApp', []);
//
// angular.module('myApp')
//   .controller('postCtrl', function() {
//     var vm = this;
//     vm.search = function(text) {
//       console.log(text);
//       vm.text = text;
//     }
//   });
//
// // components/componentOne/index.js
// angular.module('myApp')
//   .component('movieBlock', {
//     templateUrl: '/components/posts/posts.html'
//   });
//
// // components/componentTwo/index.js
// angular.module('myApp')
//   .component('searchBar', {
//     bindings: {
//       onSearch: '&'
//     },
//     templateUrl:"/components/search/search.html",
//     // template: '<input type="text" ng-change="ctrl.onSearch({text: ctrl.model})" ng-model="ctrl.model"/>',
//     controllerAs: 'ctrl'
//   });
//# sourceMappingURL=http.js.map
