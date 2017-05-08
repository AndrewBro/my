angular.module('myApp', ['ui.bootstrap', 'ui.bootstrap.carousel', 'ui.router']);


angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home-page class="home-page"></home-page>'
      })
      .state('search-page', {
        url: '/search-page',
        template: '<search-page class="search-page"></search-page>'
      });

    $urlRouterProvider.otherwise('/home');
  });


require('./services/posts');
require('./components/search-page/search-page');
require('./components/search-bar/search-bar');
require('./components/movie-block/movie-block');
require('./components/home/home');
require('./components/navigation/navigation');
require('angular-ui-bootstrap');
require('angular-ui-router');

// require ... config
// -> topMovies = [423523, 236236, 23235235]
