angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('homeState', {
      url: '/home',
      templateUrl: 'pages/home.html',
      controller:'homeCtrl'
    })
    .state('aboutState', {
      url:'/about',
      templateUrl:'pages/about.html',
      controller: 'aboutCtrl'
    })  
    .state('contactState', {
      url: '/contact',
      templateUrl:'pages/contact.html',
      controller: 'contactCtrl'
    
       
    })
    .state('myBlogState', {
      url: '/myblog',
      templateUrl: 'pages/myblog.html',
      controller: "myBlogCtrl"  
    })
    .state('newPostState', {
      url: '/newpost',
      templateUrl: 'pages/newpost.html',
      controller: "myBlogCtrl"
    })



});


