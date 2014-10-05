angular.module('myapp', [])

angular.module('myapp')
.controller('GithubCtrl', function ($http, $scope) {
  $http.get('https://api.github.com/users')
  .then(function (response) {
    $scope.users = response.data
  })
})
