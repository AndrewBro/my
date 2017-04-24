'use strict';

angular.module('app', []);

angular.module('app').component('searchPage', {
  template: '<search-bar on-search="vm.search(text)"></search-bar>\n     <movie-block ng-repeat="movie in vm.movies" movie="movie"></movie-block>',
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

angular.module('app').component('searchBar', {
  bindings: {
    onSearch: '&'
  },
  templateUrl: "/components/search-page/movie-block/movie-block.html",
  controllerAs: 'ctrl'
});

angular.module('app').component('movieBlock', {
  bindings: {
    movie: '<'
  },
  templateUrl: "/components/search-page/search-bar/search-bar.html"
});

// main.js
// angular.module('myApp', []);
//
// angular.module('myApp')
//   .controller('postCtrl', function() {
//     var vm = this;
//     vm.movie-block = function(text) {
//       console.log(text);
//       vm.text = text;
//     }
//   });
//
// // components/componentOne/index.js
// angular.module('myApp')
//   .component('movieBlock', {
//     templateUrl: '/components/movie-block-bar/movie-block-bar.html'
//   });
//
// // components/componentTwo/index.js
// angular.module('myApp')
//   .component('searchBar', {
//     bindings: {
//       onSearch: '&'
//     },
//     templateUrl:"/components/movie-block/movie-block.html",
//     // template: '<input type="text" ng-change="ctrl.onSearch({text: ctrl.model})" ng-model="ctrl.model"/>',
//     controllerAs: 'ctrl'
//   });
//# sourceMappingURL=http.js.map
