angular.module('mainApp')
        .config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: './components/home/_home.html',
        controller: 'homeCtrl as home'
    })
    .when('/about-us', {
        templateUrl: './components/about-us/_about-us.html',
        controller: 'aboutUsCtrl as aboutus'
    })
    .when('/post', {
        templateUrl: './components/post/post.html',
        controller: 'postCtrl as post'
    })
});