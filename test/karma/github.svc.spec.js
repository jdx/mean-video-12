describe('myapp', function () {
  beforeEach(module('myapp'))

  describe('GithubSvc', function () {
    var GithubSvc, $httpBackend

    beforeEach(inject(function (_GithubSvc_, _$httpBackend_) {
      GithubSvc = _GithubSvc_
      $httpBackend = _$httpBackend_
    }))

    afterEach(function () {
      $httpBackend.flush()
    })

    beforeEach(function () {
      $httpBackend.when('GET', 'https://api.github.com/users')
      .respond(['user a', 'user b'])
    })

    it('fetches users', function () {
      GithubSvc.fetchUsers()
      .then(function (users) {
        expect(users).to.have.length(2)
      })
    })
  })
})
