angular.module('myapp')
.controller('GithubCtrl', function (GithubSvc, $scope) {
  GithubSvc.fetchUsers()
  .then(function (users) {
    $scope.users = users
  })
})
