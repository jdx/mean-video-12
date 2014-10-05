angular.module('myapp')
.service('GithubSvc', function ($http) {
  this.fetchUsers = function () {
    return $http.get('https://api.github.com/users')
    .then(function (response) {
      return response.data
    })
  }
})
