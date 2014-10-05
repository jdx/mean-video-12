describe('myapp', function () {
  beforeEach(module('myapp'))

  describe('GithubCtrl', function () {
    var $scope
    var fakeGithubSvc = {}

    beforeEach(inject(function ($q) {
      fakeGithubSvc.fetchUsers = function () {
        var deferred = $q.defer()
        deferred.resolve(['user a', 'user b'])
        return deferred.promise
      }
    }))

    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new()
      $controller('GithubCtrl', {
        $scope: $scope,
        GithubSvc: fakeGithubSvc
      })
    }))

    it('loads the users', function () {
      $scope.$digest()
      expect($scope.users).to.have.length(2)
    })
  })
})
