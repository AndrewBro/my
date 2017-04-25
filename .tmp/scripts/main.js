"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
      }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    angular.module('myApp').component('movieBlock', {
      bindings: {
        movie: '<'
      },
      templateUrl: '/scripts/components/movie-block/movie-block.html'
    });
  }, {}], 2: [function (require, module, exports) {
    angular.module('myApp').component('searchBar', {
      bindings: {
        onSearch: '&'
      },
      templateUrl: '/scripts/components/search-bar/search-bar.html',
      controllerAs: 'ctrl'
    });
  }, {}], 3: [function (require, module, exports) {
    angular.module('myApp').component('searchPage', {
      templateUrl: '/scripts/components/search-page/search-page.html',
      controller: Controller,
      controllerAs: 'vm'
    });
    Controller.$inject = ['postsService'];

    function Controller(postsService) {
      var vm = this;
      vm.movies = [];

      vm.search = function (text) {
        postsService.getMovies(text).then(function (resp) {
          vm.movies = resp.data.Search;
          getEachMovie(vm.movies);
        });
      };

      function getEachMovie(list) {
        list.forEach(function (movie, index) {
          postsService.getFullMovie(movie.imdbID).then(function (resp) {
            vm.movies[index] = resp.data;
            // vm.movies[index].isDataLoaded = true;
          });
        });
      }

      // vm.search('2016'); // todo remove
    }
  }, {}], 4: [function (require, module, exports) {
    angular.module('myApp', []);

    require('./services/posts');
    require('./components/search-page/search-page');
    require('./components/search-bar/search-bar');
    require('./components/movie-block/movie-block');
  }, { "./components/movie-block/movie-block": 1, "./components/search-bar/search-bar": 2, "./components/search-page/search-page": 3, "./services/posts": 5 }], 5: [function (require, module, exports) {
    angular.module('myApp').service('postsService', Service);

    Service.$inject = ['$http'];

    function Service($http) {
      /**
       * Promise
       */
      this.getMovies = function (text) {
        return $http.get('http://www.omdbapi.com/', {
          params: {
            s: text
          }
        });
      };

      this.getFullMovie = function (imdbID) {
        return $http.get('http://www.omdbapi.com/', {
          params: {
            i: imdbID
          },
          plot: 'full'
        });
      };
    }
  }, {}] }, {}, [4]);
//# sourceMappingURL=main.js.map
