angular.module("myApp", ["ngRoute"])
.config(function($routeProvider,$interpolateProvider) {
  $routeProvider
  .when("/", {
    template : "<p>main</p>"
  })
  .when("/red", {
    template : "<p>red</p>"
  })
  .when("/green", {
    template : "<p>green</p>"
  })
  .when("/blue", {
    template : "<p>blue</p>"
  });
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
})
.controller('ctrl',function($scope){
$scope.nombre=title
$scope.say=function(){

alert($scope.nombre)
    }
})
