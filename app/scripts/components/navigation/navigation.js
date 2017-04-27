
angular.module('myApp', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: "/home",
        component: "searchHeader"
      })
      .state('search-page', {
        url: "/search-page",
        component: "searchPage"
      });

    $urlRouterProvider.otherwise('/home');
  });

