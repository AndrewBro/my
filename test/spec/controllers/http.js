'use strict';

describe('Controller: httpCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var httpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    httpCtrl = $controller('httpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(httpCtrl.awesomeThings.length).toBe(3);
  });
});
