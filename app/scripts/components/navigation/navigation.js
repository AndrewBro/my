
angular.module('myApp', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: "/home",
        component: 'searchHeader'
      })
      .state('search-page', {
        url: "/search-page",
        component: 'searchPage'
      });

    $urlRouterProvider.otherwise('/home');
  });

//
// angular.module('myApp' , [])
//   .config(function ($stateProvider, $urlRouterProvider) {
//
//     $stateProvider
//       .state('transactions', {
//         url: "/transactions",
//         templateUrl: "../search-page/search-page.html"
//       })
//       .state('settings', {
//         url: "/settings",
//         templateUrl: "https://www.npmjs.com/package/ui-router"
//       });
//
//     $urlRouterProvider.otherwise('https://github.com/angular-ui/ui-router/issues/677');
//   });
