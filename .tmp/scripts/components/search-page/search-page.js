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
    angular.module('myApp').component('searchPage', {
      templateUrl: '/scripts/components/search-page/search-page.html',
      controller: Controller,
      controllerAs: 'vm'
    });

    Controller.$inject = ['postsService'];

    function Controller(postsService) {
      var vm = this;
      vm.movies = [];
      vm.title = '';

      vm.search = function (title, year, type) {

        if (!title) {
          alert('Please, enter title');
          return;
        }

        // vm.title = (type === undefined && vm.title !== '') ? vm.title : 'Drama';
        // vm.title = text || vm.title;

        postsService.getMovies(title, year, type).then(function (resp) {
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

      // resp.data.Search[0].Poster
      vm.search('2016'); // todo remove
    }
  }, {}] }, {}, [1]);
//# sourceMappingURL=search-page.js.map
