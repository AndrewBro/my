
angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: "/",
        template : `<home-page movies="vm.movies" class="home-page"></home-page>`
      })
      .state('search-page', {
        url: "/search-page",
        template: `<search-page class="search-page"></search-page>`
      });

    $urlRouterProvider.otherwise('/home');
  });

