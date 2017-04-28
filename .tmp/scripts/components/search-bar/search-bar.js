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
    angular.module('myApp').component('searchBar', {
      bindings: {
        onSearch: '&'
      },
      templateUrl: '/scripts/components/search-bar/search-bar.html',
      controller: ['$scope', function ($scope) {
        var vm = this;

        vm.search = function () {
          vm.onSearch({
            title: vm.title,
            year: vm.year,
            type: vm.type
          });
        };
      }],
      controllerAs: 'ctrl'
    });
  }, {}] }, {}, [1]);
//# sourceMappingURL=search-bar.js.map
