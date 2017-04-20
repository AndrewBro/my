'use strict';

var app = angular.module('myApp', []);

app.controller('postCtrl', function ($scope, $http) {

  var vm = this;
  vm.search = function (text) {
    console.log(text + 'qweqweqw');
    vm.text = text;
  };

  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});
//# sourceMappingURL=http.js.map
