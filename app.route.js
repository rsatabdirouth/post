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
        templateUrl: './components/post/_post.html',
        controller: 'postCtrl as post'
    })
    .when('/listgroup', {
        templateUrl: './components/listgroup/_list.html',
        controller: 'listCtrl as list'
    })

    
    
});

   
    
