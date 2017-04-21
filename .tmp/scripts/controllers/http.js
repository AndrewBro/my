'use strict';

angular.module('app', []);

angular.module('app').component('parent', {
  template: '<component-two on-search="vm.search(text)"></component-two>\n       <component-one ng-repeat="movie in vm.movies" movie="movie"></component-one>',
  controller: function controller($http) {
    var vm = this;
    vm.movies = [];
    vm.search = function (text) {
      $http.get('http://www.omdbapi.com/', {
        params: {
          s: text
        }
      }).then(function (resp) {
        return vm.movies = resp.data.Search;
      });
    };
  },
  controllerAs: 'vm'
});

// components/componentTwo/index.js
angular.module('app').component('componentTwo', {
  bindings: {
    onSearch: '&'
  },
  // template: '<input type="text" ng-change="ctrl.onSearch({text: ctrl.model})" ng-model="ctrl.model"/>',
  templateUrl: "/components/search/search.html",
  controllerAs: 'ctrl'
});

// components/componentOne/index.js
angular.module('app').component('componentOne', {
  bindings: {
    movie: '<'
  },
  templateUrl: "/components/posts/posts.html"
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
