angular.module('myApp')
  .component('searchHeader', {
    bindings: {
      poster: '<'
    },
    templateUrl: '/scripts/components/header/header.html',
    controllerAs: 'vmp',
    controller: function () {
      var vmp = this;
      vmp.myInterval = 5000;
      vmp.noWrapSlides = false;
      vmp.active = 1;
    }
  });

Controller.$inject = ['postsService'];

function Controller(postsService) {
  const vmp = this;
  vmp.poster = [];
  vmp.title = '';

  vmp.search = function (title) {

    this.getPoster = function (text) {
      return $http.get('http://www.omdbapi.com/', {
        params: {
          s: text,
        },
      })
    };
  };
  vmp.search('2016')
}
