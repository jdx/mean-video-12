angular.module('myapp', [])

angular.module('myapp')
.controller('GithubCtrl', function (GithubSvc, $scope) {
  GithubSvc.fetchUsers()
  .then(function (users) {
    $scope.users = users
  })
})

angular.module('myapp')
.service('GithubSvc', function ($http) {
  this.fetchUsers = function () {
    return $http.get('https://api.github.com/users')
    .then(function (response) {
      return response.data
    })
  }
})
