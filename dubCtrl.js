var madLib= angular.module('mLviews',[ngRoute]);
madLib.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/form',
{controller:'ctrl',
templateUrl:'input.html'});


}