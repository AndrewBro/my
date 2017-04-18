'use strict';

/*  @ngdoc function
  @name myApp.controller:httpCtrl
  @description
  # httpCtrl
  Controller of the myApp
*/


angular.module('myApp', [])
  .controller('httpCtrl', function ($scope, $http) {
    $http.get('http://localhost:9000/data/data.json')
      .success(function (response) {
        $scope.persons = response.people;
      });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });


