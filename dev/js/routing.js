/**
 * Created by Ryan on 10/8/2014.
 */
var app = angular.module('jbcModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/technical', {templateUrl:'partials/technical.html'})
        .when('/artistic', {templateUrl:'partials/artistic.html'})
        .when('/emotional', {templateUrl: 'partials/emotional.html'})
        .when('/projects', {templateUrl: 'partials/projects.html'})
        .when('/contact', {templateUrl: 'partials/contact.html'})
        .when('/partners', {templateUrl: 'partials/partners.html'})
        .otherwise({redirctTo:'/', templateUrl: 'partials/home.html'})
}]);