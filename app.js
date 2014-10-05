angular.module("myapp",[]);
angular.module("myapp").controller("GithubCtrl",["GithubSvc","$scope",function(t,e){t.fetchUsers().then(function(t){e.users=t})}]);
angular.module("myapp").service("GithubSvc",["$http",function(t){this.fetchUsers=function(){return t.get("https://api.github.com/users").then(function(t){return t.data})}}]);